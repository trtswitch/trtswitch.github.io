/**
 * Table of Contents (TOC) functionality for GitHub Pages
 * Uses existing HTML elements from layout - does NOT create new ones
 */

// TOC Configuration
const TOC_CONFIG = {
    selectors: {
        tocContainer: '#floating-toc',
        tocList: '#toc-list', 
        tocToggle: '.toc-toggle',
        tocBackdrop: '.toc-backdrop',
        headings: 'h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]',
        wrapper: '.wrapper, .page-content, main'
    },
    settings: {
        scrollOffset: 250,
        mobileBreakpoint: 768,
        throttleDelay: 100,
        initDelay: 150
    },
    classes: {
        tocItem: 'toc-item',
        tocLink: 'toc-link',
        active: 'active',
        show: 'show',
        hidden: 'hidden'
    }
};

// TOC State Management
const TOCState = {
    isInitialized: false,
    isMobile: false,
    isVisible: true,
    elements: {}
};

/**
 * Initialize TOC when DOM is ready
 */
function initializeTOC() {
    if (TOCState.isInitialized) return;
    
    console.log('Initializing Table of Contents...');
    
    // Cache DOM elements (don't create new ones)
    cacheElements();
    
    // Check if TOC should be disabled for this page
    if (shouldDisableTOC()) {
        console.log('TOC disabled for this page');
        return;
    }
    
    // Generate TOC content
    generateTOC();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize responsive behavior
    handleResize();
    
    // Set initial active section
    updateActiveSection();
    
    TOCState.isInitialized = true;
    console.log('TOC initialized successfully');
}

/**
 * Cache frequently used DOM elements - DO NOT CREATE NEW ONES
 */
function cacheElements() {
    TOCState.elements = {
        tocContainer: document.querySelector(TOC_CONFIG.selectors.tocContainer),
        tocList: document.querySelector(TOC_CONFIG.selectors.tocList),
        tocToggle: document.querySelector(TOC_CONFIG.selectors.tocToggle),
        tocBackdrop: document.querySelector(TOC_CONFIG.selectors.tocBackdrop),
        wrapper: document.querySelector(TOC_CONFIG.selectors.wrapper)
    };
}

/**
 * Check if TOC should be disabled
 */
function shouldDisableTOC() {
    return document.body.classList.contains('no-toc') ||
           !TOCState.elements.tocContainer ||
           !TOCState.elements.tocList;
}

/**
 * Generate TOC from page headings
 */
function generateTOC() {
    const { tocContainer, tocList } = TOCState.elements;
    const headings = document.querySelectorAll(TOC_CONFIG.selectors.headings);
    
    if (headings.length === 0) {
        hideTOCCompletely();
        return;
    }
    
    // Clear existing TOC content
    tocList.innerHTML = '';
    
    // Generate TOC items
    headings.forEach((heading, index) => {
        const tocItem = createTOCItem(heading, index);
        if (tocItem) {
            tocList.appendChild(tocItem);
        }
    });
    
    console.log(`TOC generated with ${headings.length} headings`);
}

/**
 * Create a single TOC item
 */
function createTOCItem(heading, index) {
    const level = parseInt(heading.tagName.charAt(1));
    const id = heading.getAttribute('id');
    const text = heading.textContent.trim();
    
    if (!id || !text) {
        console.warn(`Heading ${index + 1} missing id or text:`, heading);
        return null;
    }
    
    // Create list item
    const listItem = document.createElement('li');
    listItem.className = TOC_CONFIG.classes.tocItem;
    
    // Create link
    const link = document.createElement('a');
    link.href = `#${id}`;
    link.textContent = text;
    link.className = `${TOC_CONFIG.classes.tocLink} level-${level}`;
    link.setAttribute('aria-label', `Navigate to section: ${text}`);
    
    // Add click handler
    link.addEventListener('click', handleTOCLinkClick);
    
    listItem.appendChild(link);
    return listItem;
}

/**
 * Handle TOC link clicks
 */
function handleTOCLinkClick(event) {
    event.preventDefault();
    
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (!targetElement) {
        console.warn(`Target element not found: ${targetId}`);
        return;
    }
    
    // Smooth scroll to target
    targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
    
    // Update active state immediately
    updateActiveSection(this);
    
    // Close mobile TOC if open
    if (TOCState.isMobile && TOCState.isVisible) {
        closeMobileTOC();
    }
    
    // Update URL without jumping
    history.replaceState(null, null, `#${targetId}`);
}

/**
 * Update active section highlighting
 */
function updateActiveSection(clickedLink = null) {
    const tocLinks = document.querySelectorAll(`.${TOC_CONFIG.classes.tocLink}`);
    
    // Clear all active states
    tocLinks.forEach(link => link.classList.remove(TOC_CONFIG.classes.active));
    
    if (clickedLink) {
        // If a link was clicked, make it active
        clickedLink.classList.add(TOC_CONFIG.classes.active);
        return;
    }
    
    // Otherwise, determine active section based on scroll position
    const headings = document.querySelectorAll(TOC_CONFIG.selectors.headings);
    let activeHeading = null;
    const scrollPosition = window.scrollY + TOC_CONFIG.settings.scrollOffset;
    
    // Find the heading that's currently in view
    headings.forEach(heading => {
        if (heading.offsetTop <= scrollPosition) {
            activeHeading = heading;
        }
    });
    
    if (activeHeading) {
        const activeLink = document.querySelector(`a[href="#${activeHeading.id}"]`);
        if (activeLink) {
            activeLink.classList.add(TOC_CONFIG.classes.active);
        }
    }
}

/**
 * Mobile TOC functions
 */
function toggleMobileTOC() {
    if (TOCState.isVisible) {
        closeMobileTOC();
    } else {
        openMobileTOC();
    }
}

function openMobileTOC() {
    const { tocContainer, tocBackdrop } = TOCState.elements;
    
    if (tocContainer) {
        tocContainer.classList.add(TOC_CONFIG.classes.show);
        tocContainer.classList.remove(TOC_CONFIG.classes.hidden);
    }
    
    if (tocBackdrop) {
        tocBackdrop.classList.add(TOC_CONFIG.classes.show);
    }
    
    // Prevent body scroll on mobile
    document.body.style.overflow = 'hidden';
    TOCState.isVisible = true;
}

function closeMobileTOC() {
    const { tocContainer, tocBackdrop } = TOCState.elements;
    
    if (tocContainer) {
        tocContainer.classList.remove(TOC_CONFIG.classes.show);
    }
    
    if (tocBackdrop) {
        tocBackdrop.classList.remove(TOC_CONFIG.classes.show);
    }
    
    // Restore body scroll
    document.body.style.overflow = '';
    TOCState.isVisible = false;
}

/**
 * Handle responsive behavior
 */
function handleResize() {
    TOCState.isMobile = window.innerWidth <= TOC_CONFIG.settings.mobileBreakpoint;
    
    const { tocToggle } = TOCState.elements;
    
    if (TOCState.isMobile) {
        // Mobile: show toggle button
        if (tocToggle) tocToggle.style.display = 'block';
    } else {
        // Desktop: hide toggle, ensure TOC is visible and static
        if (tocToggle) tocToggle.style.display = 'none';
        closeMobileTOC(); // Close mobile overlay if switching from mobile
        TOCState.isVisible = true;
    }
}

/**
 * Hide TOC completely when no headings found
 */
function hideTOCCompletely() {
    const { tocContainer, tocToggle } = TOCState.elements;
    
    if (tocContainer) tocContainer.style.display = 'none';
    if (tocToggle) tocToggle.style.display = 'none';
    
    console.log('TOC hidden - no headings with IDs found');
}

/**
 * Set up all event listeners
 */
function setupEventListeners() {
    const { tocToggle, tocBackdrop } = TOCState.elements;
    
    // Mobile toggle button
    if (tocToggle) {
        tocToggle.addEventListener('click', toggleMobileTOC);
    }
    
    // Mobile backdrop
    if (tocBackdrop) {
        tocBackdrop.addEventListener('click', closeMobileTOC);
    }
    
    // Scroll listener for active section highlighting
    window.addEventListener('scroll', throttle(updateActiveSection, TOC_CONFIG.settings.throttleDelay));
    
    // Resize listener for responsive behavior
    window.addEventListener('resize', throttle(handleResize, TOC_CONFIG.settings.throttleDelay));
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyDown);
}

/**
 * Handle keyboard events
 */
function handleKeyDown(event) {
    // Close mobile TOC on Escape key
    if (event.key === 'Escape' && TOCState.isMobile && TOCState.isVisible) {
        closeMobileTOC();
    }
}

/**
 * Throttle function for performance optimization
 */
function throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Public API - Export functions for external use
 */
window.toggleTOC = toggleMobileTOC;
window.openTOC = openMobileTOC;
window.closeTOC = closeMobileTOC;

/**
 * Initialize when DOM is ready
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(initializeTOC, TOC_CONFIG.settings.initDelay);
    });
} else {
    setTimeout(initializeTOC, TOC_CONFIG.settings.initDelay);
}
