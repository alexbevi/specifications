// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="index.html">Introduction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="CODEOWNERS.html">Specification Owners</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="driver-mantras.html">Mantras</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="wireversion-featurelist/wireversion-featurelist.html">Wire Version Feature List</a></span></li><li class="chapter-item expanded "><li class="part-title">Specifications</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">1.</strong> Serialization</span></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="BSON.html"><strong aria-hidden="true">1.1.</strong> BSON</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="bson-binary-vector/bson-binary-vector.html"><strong aria-hidden="true">1.2.</strong> BSON Binary Subtype 9: Vector</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="bson-objectid/objectid.html"><strong aria-hidden="true">1.3.</strong> ObjectId</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="bson-decimal128/decimal128.html"><strong aria-hidden="true">1.4.</strong> Decimal128</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="bson-binary-uuid/uuid.html"><strong aria-hidden="true">1.5.</strong> UUID</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="dbref/dbref.html"><strong aria-hidden="true">1.6.</strong> DBRef</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="extended-json/extended-json.html"><strong aria-hidden="true">1.7.</strong> Extended JSON</a></span></li></ol><li class="chapter-item expanded "><li class="spacer"></li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">2.</strong> Communication</span></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="message/OP_MSG.html"><strong aria-hidden="true">2.1.</strong> OP_MSG</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="run-command/run-command.html"><strong aria-hidden="true">2.2.</strong> Command Execution</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="connection-string/connection-string-spec.html"><strong aria-hidden="true">2.3.</strong> Connection String</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="uri-options/uri-options.html"><strong aria-hidden="true">2.4.</strong> URI Options</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ocsp-support/ocsp-support.html"><strong aria-hidden="true">2.5.</strong> OCSP</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="mongodb-handshake/handshake.html"><strong aria-hidden="true">2.6.</strong> Initial Handshake</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="compression/OP_COMPRESSED.html"><strong aria-hidden="true">2.7.</strong> Wire Compression</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="socks5-support/socks5.html"><strong aria-hidden="true">2.8.</strong> SOCKS5</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="initial-dns-seedlist-discovery/initial-dns-seedlist-discovery.html"><strong aria-hidden="true">2.9.</strong> Initial DNS Seedlist Discovery</a></span></li></ol><li class="chapter-item expanded "><li class="spacer"></li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">3.</strong> Connectivity</span></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="server-discovery-and-monitoring/server-discovery-and-monitoring.html"><strong aria-hidden="true">3.1.</strong> Server Discovery and Monitoring</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="connection-monitoring-and-pooling/connection-monitoring-and-pooling.html"><strong aria-hidden="true">3.2.</strong> Connection Monitoring and Pooling</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="load-balancers/load-balancers.html"><strong aria-hidden="true">3.3.</strong> Load Balancer Support</a></span></li></ol><li class="chapter-item expanded "><li class="spacer"></li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="auth/auth.html"><strong aria-hidden="true">4.</strong> Authentication</a></span></li><li class="chapter-item expanded "><li class="spacer"></li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">5.</strong> Availability</span></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="server-discovery-and-monitoring/server-monitoring.html"><strong aria-hidden="true">5.1.</strong> Server Monitoring</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="polling-srv-records-for-mongos-discovery/polling-srv-records-for-mongos-discovery.html"><strong aria-hidden="true">5.2.</strong> SRV Polling for mongos Discovery</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="server-selection/server-selection.html"><strong aria-hidden="true">5.3.</strong> Server Selection</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="max-staleness/max-staleness.html"><strong aria-hidden="true">5.4.</strong> Max Staleness</a></span></li></ol><li class="chapter-item expanded "><li class="spacer"></li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">6.</strong> Resilience</span></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">6.1.</strong> Retryability</span></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="retryable-reads/retryable-reads.html"><strong aria-hidden="true">6.1.1.</strong> Reads</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="retryable-writes/retryable-writes.html"><strong aria-hidden="true">6.1.2.</strong> Writes</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="client-side-operations-timeout/client-side-operations-timeout.html"><strong aria-hidden="true">6.2.</strong> CSOT</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">6.3.</strong> Consistency</span></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="sessions/driver-sessions.html"><strong aria-hidden="true">6.3.1.</strong> Sessions</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="causal-consistency/causal-consistency.html"><strong aria-hidden="true">6.3.2.</strong> Causal Consistency</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="sessions/snapshot-sessions.html"><strong aria-hidden="true">6.3.3.</strong> Snapshot Reads</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="transactions/transactions.html"><strong aria-hidden="true">6.3.4.</strong> Transactions</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="transactions-convenient-api/transactions-convenient-api.html"><strong aria-hidden="true">6.3.5.</strong> Convenient Transactions API</a></span></li></ol></li></ol><li class="chapter-item expanded "><li class="spacer"></li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">7.</strong> Programmability</span></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="versioned-api/versioned-api.html"><strong aria-hidden="true">7.1.</strong> Stable API</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">7.2.</strong> Resource Management</span></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="enumerate-databases/enumerate-databases.html"><strong aria-hidden="true">7.2.1.</strong> Databases</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="enumerate-collections/enumerate-collections.html"><strong aria-hidden="true">7.2.2.</strong> Collections</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="index-management/index-management.html"><strong aria-hidden="true">7.2.3.</strong> Indexes</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">7.3.</strong> Data Management</span></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="crud/crud.html"><strong aria-hidden="true">7.3.1.</strong> CRUD</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="collation/collation.html"><strong aria-hidden="true">7.3.2.</strong> Collation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="server_write_commands/server_write_commands.html"><strong aria-hidden="true">7.3.3.</strong> Write Commands</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="driver-bulk-update.html"><strong aria-hidden="true">7.3.4.</strong> Bulk API</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="crud/bulk-write.html"><strong aria-hidden="true">7.3.5.</strong> Bulk Write</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="read-write-concern/read-write-concern.html"><strong aria-hidden="true">7.3.6.</strong> R/W Concern</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">7.4.</strong> Cursors</span></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="change-streams/change-streams.html"><strong aria-hidden="true">7.4.1.</strong> Change Streams</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="find_getmore_killcursors_commands/find_getmore_killcursors_commands.html"><strong aria-hidden="true">7.4.2.</strong> find/getMore/killCursors</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="gridfs/gridfs-spec.html"><strong aria-hidden="true">7.5.</strong> GridFS</a></span></li></ol><li class="chapter-item expanded "><li class="spacer"></li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">8.</strong> Security</span></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="client-side-encryption/client-side-encryption.html"><strong aria-hidden="true">8.1.</strong> Client Side Encryption</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="bson-binary-encrypted/binary-encrypted.html"><strong aria-hidden="true">8.2.</strong> BSON Binary Subtype 6: Encrypted</a></span></li></ol><li class="chapter-item expanded "><li class="spacer"></li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">9.</strong> Observability</span></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="open-telemetry/open-telemetry.html"><strong aria-hidden="true">9.1.</strong> Open Telemetry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-logging-and-monitoring/command-logging-and-monitoring.html"><strong aria-hidden="true">9.2.</strong> Command Logging and Monitoring</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="server-discovery-and-monitoring/server-discovery-and-monitoring-logging-and-monitoring.html"><strong aria-hidden="true">9.3.</strong> SDAM Logging and Monitoring</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="logging/logging.html"><strong aria-hidden="true">9.4.</strong> Standardized Logging</a></span></li></ol><li class="chapter-item expanded "><li class="spacer"></li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">10.</strong> Testability</span></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="unified-test-format/unified-test-format.html"><strong aria-hidden="true">10.1.</strong> Unified Test Format</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="benchmarking/benchmarking.html"><strong aria-hidden="true">10.2.</strong> Performance Benchmarking</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="bson-corpus/bson-corpus.html"><strong aria-hidden="true">10.3.</strong> BSON Corpus</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="connections-survive-step-down/tests/index.html"><strong aria-hidden="true">10.4.</strong> Replication Event Resilience</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="faas-automated-testing/faas-automated-testing.html"><strong aria-hidden="true">10.5.</strong> FAAS Automated Testing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="max-staleness/max-staleness-tests.html"><strong aria-hidden="true">10.6.</strong> Max Staleness Tests</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="server-selection/server-selection-tests.html"><strong aria-hidden="true">10.7.</strong> Server Selection Tests</a></span></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

