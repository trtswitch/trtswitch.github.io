// Floating Table of Contents functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize existing collapsible functionality first
    initializeCollapsibles();
    
    // Then initialize floating TOC
    initializeFloatingTOC();
});

// Your existing collapsible function (keep this as is)
function initializeCollapsibles() {
    console.log('DOM loaded, looking for collapsible elements...');
    
    setTimeout(function() {
        var collapsibleButtons = document.querySelectorAll('.collapsible');
        console.log('Found', collapsibleButtons.length, 'collapsible buttons');
        
        collapsibleButtons.forEach(function(button, index) {
            console.log('Setting up button', index);
            
            button.addEventListener("click", function() {
                console.log('Button clicked:', this.textContent);
                
                // Toggle the active class
                this.classList.toggle("active");
                
                // Jekyll wraps buttons in <p> tags, so we need to go up to the parent
                // and then get the next sibling
                var buttonParent = this.parentElement;
                var content = buttonParent.nextElementSibling;
                
                // If the parent is a <p> tag and next sibling exists
                if (content && content.classList.contains('collapsible-content')) {
                    console.log('Found content div after parent');
                    
                    // Toggle the content visibility
                    if (content.classList.contains('active')) {
                        // Currently open - close it
                        content.style.maxHeight = "0px";
                        content.classList.remove("active");
                        console.log('Closing content');
                    } else {
                        // Currently closed - open it
                        content.style.maxHeight = content.scrollHeight + "px";
                        content.classList.add("active");
                        console.log('Opening content, height:', content.scrollHeight);
                    }
                } else {
                    console.log('No content div found. Parent:', buttonParent.tagName, 'Next sibling:', content ? content.tagName : 'none');
                }
            });
        });
        
        console.log('Collapsible setup complete!');
    }, 500);
}

// Create TOC HTML elements
function createTOCElements() {
    // Create toggle button
    const toggleButton = document.createElement('button');
    toggleButton.id = 'tocToggle';
    toggleButton.className = 'toc-toggle';
    toggleButton.innerHTML = '☰';
    toggleButton.setAttribute('aria-label', 'Toggle table of contents');
    document.body.appendChild(toggleButton);

    // Create backdrop for mobile
    const backdrop = document.createElement('div');
    backdrop.id = 'tocBackdrop';
    backdrop.className = 'toc-backdrop';
    document.body.appendChild(backdrop);

    // Create TOC container
    const tocContainer = document.createElement('div');
    tocContainer.id = 'floatingToc';
    tocContainer.className = 'floating-toc';
    
    const tocTitle = document.createElement('h3');
    tocTitle.textContent = 'On this page';
    
    const tocList = document.createElement('ul');
    tocList.id = 'tocList';
    tocList.className = 'toc-list';
    
    tocContainer.appendChild(tocTitle);
    tocContainer.appendChild(tocList);
    document.body.appendChild(tocContainer);
}

// New Floating TOC functionality
function initializeFloatingTOC() {
    // Create TOC elements
    createTOCElements();
    
    const tocContainer = document.getElementById('floatingToc');
    const tocList = document.getElementById('tocList');
    const tocToggle = document.getElementById('tocToggle');
    const tocBackdrop = document.getElementById('tocBackdrop');
    
    if (!tocContainer || !tocList || !tocToggle) {
        console.log('TOC elements not found, skipping TOC initialization');
        return;
    }
    
    let tocVisible = true;

    // Generate TOC from headings
    function generateTOC() {
        const headings = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]');
        tocList.innerHTML = '';

        if (headings.length === 0) {
            // Hide TOC if no headings found
            tocContainer.style.display = 'none';
            tocToggle.style.display = 'none';
            return;
        }

        headings.forEach(heading => {
            const level = parseInt(heading.tagName.substr(1));
            const link = document.createElement('a');
            const listItem = document.createElement('li');
            
            link.href = `#${heading.id}`;
            link.textContent = heading.textContent;
            link.className = `toc-link level-${level}`;
            
            listItem.className = 'toc-item';
            listItem.appendChild(link);
            tocList.appendChild(listItem);
        });

        // Add click handlers for smooth scrolling
        document.querySelectorAll('.toc-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }

                // Hide TOC on mobile after clicking
                if (window.innerWidth <= 768) {
                    hideTOC();
                }
            });
        });
    }

    // Highlight current section
    function highlightCurrentSection() {
        const headings = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]');
        const tocLinks = document.querySelectorAll('.toc-link');
        
        let currentSection = '';
        const scrollPosition = window.scrollY + 150; // Offset for header

        headings.forEach(heading => {
            if (heading.offsetTop <= scrollPosition) {
                currentSection = heading.id;
            }
        });

        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Show/hide TOC
    function showTOC() {
        tocContainer.classList.remove('hidden');
        tocContainer.classList.add('show');
        if (tocBackdrop) tocBackdrop.classList.add('show');
        tocVisible = true;
    }

    function hideTOC() {
        tocContainer.classList.add('hidden');
        tocContainer.classList.remove('show');
        if (tocBackdrop) tocBackdrop.classList.remove('show');
        tocVisible = false;
    }

    function toggleTOC() {
        if (tocVisible) {
            hideTOC();
        } else {
            showTOC();
        }
    }

    // UPDATED: Remove auto-hide behavior, keep TOC static
    function handleScroll() {
        // Only highlight current section, no auto-hide
        highlightCurrentSection();
    }

    // UPDATED: Handle responsive behavior - force TOC to stay visible on desktop
    function handleResize() {
        if (window.innerWidth <= 768) {
            // Mobile: show toggle button, hide TOC by default
            tocToggle.classList.add('show');
            if (tocVisible) hideTOC();
        } else {
            // Desktop/Tablet: hide toggle button, ALWAYS show TOC
            tocToggle.classList.remove('show');
            // Force TOC to stay visible on desktop
            tocContainer.classList.remove('hidden');
            tocContainer.classList.add('show');
            tocVisible = true;
        }
    }

    // Throttle function for performance
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Event listeners
    tocToggle.addEventListener('click', toggleTOC);
    window.addEventListener('scroll', throttle(handleScroll, 100));
    window.addEventListener('resize', handleResize);

    // Hide TOC when clicking backdrop on mobile
    if (tocBackdrop) {
        tocBackdrop.addEventListener('click', hideTOC);
    }

    // Hide TOC when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && tocVisible && 
            !tocContainer.contains(e.target) && 
            e.target !== tocToggle && 
            !tocToggle.contains(e.target)) {
            hideTOC();
        }
    });

    // Initialize
    generateTOC();
    handleResize();
    highlightCurrentSection();

    // Re-generate TOC if content changes dynamically
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                generateTOC();
            }
        });
    });

    observer.observe(document.querySelector('.wrapper') || document.body, {
        childList: true,
        subtree: true
    });
}
