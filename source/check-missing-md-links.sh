#!/bin/bash

# check-missing-md-links.sh
#
# Scans a Markdown file for linked .md files and checks if:
#   1. Each linked file exists on disk (relative to base dir).
#   2. There are any .md files on disk that are not referenced (orphans).
#   3. Optionally filters out paths using one or more regexes.
#
# Fully compatible with macOS Bash 3.2 — no Python or realpath needed.
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
SOURCE_DIR="$(cd "$(dirname "$SOURCE_FILE")" && pwd)"

if [ ! -f "$SOURCE_FILE" ]; then
  echo "❗️ Source file not found: $SOURCE_FILE"
  exit 1
fi

# Pure Bash version of resolve_path
resolve_path() {
  local from_dir="$1"
  local target="$2"
  local base_dir="$3"

  local abs_path
  abs_path="$(cd "$from_dir" && cd "$(dirname "$target")" 2>/dev/null && echo "$(pwd -P)/$(basename "$target")")"

  # If abs_path doesn't start with base_dir, treat as unresolved
  if [[ "$abs_path" == "$base_dir"* ]]; then
    echo "${abs_path#$base_dir/}"
  else
    echo "$abs_path"
  fi
}

linked_files=()
linked_lines=()
linked_context=()

# Extract .md links and normalize
lineno=0
while IFS= read -r line || [ -n "$line" ]; do
  lineno=$((lineno + 1))
  temp="$line"
  while [[ $temp =~ \]\(([^\)]+\.md)\) ]]; do
    raw_link="${BASH_REMATCH[1]}"
    rel_link=$(resolve_path "$SOURCE_DIR" "$raw_link" "$BASE_DIR")
    linked_files+=("$rel_link")
    linked_lines+=("$lineno")
    linked_context+=("$line")
    temp="${temp#*${raw_link})}"
  done
done < "$SOURCE_FILE"

# Deduplicate
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

# Combine --exclude regexes
EXCLUDE_REGEX=""
if [ "${#EXCLUDE_PATTERNS[@]}" -gt 0 ]; then
  EXCLUDE_REGEX="$(IFS='|'; echo "${EXCLUDE_PATTERNS[*]}")"
fi

# Find actual .md files (filter once)
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

# Missing links
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

# Summary
if ! $missing && ! $orphaned; then
  echo "✅ All linked files exist and no orphaned .md files found."
fi

