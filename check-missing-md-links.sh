#!/bin/bash

# check-missing-md-links.sh
#
# Scans a Markdown file for linked .md files and checks if:
#   1. Each linked file exists on disk.
#   2. There are any .md files on disk that are not referenced (orphans).
#   3. Optionally filters out paths using one or more regexes.
#
# Fully compatible with macOS Bash 3.2.
#
# USAGE:
#
#   ./check-missing-md-links.sh <source.md> [base_dir] [--verbose] [--exclude <regex>]...
#
# EXAMPLES:
#   ./check-missing-md-links.sh README.md
#   ./check-missing-md-links.sh README.md . --verbose
#   ./check-missing-md-links.sh README.md . --exclude '(^|/)test/' --exclude '(^|/)drafts/'

SOURCE_FILE="$1"
BASE_DIR="${2:-$(dirname "$SOURCE_FILE")}"
shift 2

VERBOSE=""
EXCLUDE_PATTERNS=()

while [[ $# -gt 0 ]]; do
  case "$1" in
    --verbose)
      VERBOSE="1"
      shift
      ;;
    --exclude)
      EXCLUDE_PATTERNS+=("$2")
      shift 2
      ;;
    *)
      shift
      ;;
  esac
done

BASE_DIR="$(cd "$BASE_DIR" && pwd)"

if [ ! -f "$SOURCE_FILE" ]; then
  echo "❗️ Source file not found: $SOURCE_FILE"
  exit 1
fi

linked_files=()
linked_lines=()
linked_context=()

# Extract .md links from source
lineno=0
while IFS= read -r line || [ -n "$line" ]; do
  lineno=$((lineno + 1))
  temp="$line"
  while [[ $temp =~ \]\(([^\)]+\.md)\) ]]; do
    file="${BASH_REMATCH[1]}"
    linked_files+=("$file")
    linked_lines+=("$lineno")
    linked_context+=("$line")
    temp="${temp#*${file})}"
  done
done < "$SOURCE_FILE"

# Deduplicate linked files
dedup_files=()
dedup_lines=()
dedup_context=()
seen=""
for i in "${!linked_files[@]}"; do
  file="${linked_files[$i]}"
  if ! echo "$seen" | grep -q "|$file|"; then
    dedup_files+=("$file")
    dedup_lines+=("${linked_lines[$i]}")
    dedup_context+=("${linked_context[$i]}")
    seen="$seen|$file|"
  fi
done

# Build combined exclude regex if needed
EXCLUDE_REGEX=""
if [ "${#EXCLUDE_PATTERNS[@]}" -gt 0 ]; then
  EXCLUDE_REGEX="$(IFS='|'; echo "${EXCLUDE_PATTERNS[*]}")"
fi

# Collect actual .md files (filtered once)
tmp_actual_files=()
if [ -n "$EXCLUDE_REGEX" ]; then
  while IFS= read -r f; do tmp_actual_files+=("$f"); done < <(
    find "$BASE_DIR" -type f -name "*.md" | sed "s|^$BASE_DIR/||" | grep -Ev "$EXCLUDE_REGEX" | sort -u
  )
else
  while IFS= read -r f; do tmp_actual_files+=("$f"); done < <(
    find "$BASE_DIR" -type f -name "*.md" | sed "s|^$BASE_DIR/||" | sort -u
  )
fi
actual_files=("${tmp_actual_files[@]}")

# Build string sets for fast lookup
linked_set="|"
for f in "${dedup_files[@]}"; do
  linked_set="${linked_set}${f}|"
done

actual_set="|"
for af in "${actual_files[@]}"; do
  actual_set="${actual_set}${af}|"
done

# Verbose output
if [ "$VERBOSE" = "1" ]; then
  for i in "${!dedup_files[@]}"; do
    file="${dedup_files[$i]}"
    line="${dedup_lines[$i]}"
    if [[ "$actual_set" == *"|$file|"* ]]; then
      echo "✅ Line $line: $file (found at ./$file)"
    else
      echo "❌ Line $line: $file (NOT found)"
    fi
  done
  echo ""
fi

# Check for missing linked files
echo "� Checking for missing linked markdown files..."
missing=false
for i in "${!dedup_files[@]}"; do
  file="${dedup_files[$i]}"
  line="${dedup_lines[$i]}"
  context="${dedup_context[$i]}"
  if [[ "$actual_set" != *"|$file|"* ]]; then
    echo "❌ Missing file: $file"
    echo "   ↳ Referenced at line $line:"
    echo "     $context"
    missing=true
  fi
done

# Orphaned files
echo ""
echo "� Checking for orphaned markdown files..."
orphaned=false
for af in "${actual_files[@]}"; do
  if [[ "$linked_set" != *"|$af|"* ]]; then
    echo "⚠️  Orphaned file: ./$af"
    orphaned=true
  fi
done

# Final summary
if ! $missing && ! $orphaned; then
  echo "✅ All linked files exist and no orphaned .md files found."
fi

