/**
 * Main JavaScript file for the Oncology Treatment Switch website
 * Handles collapsible sections and other interactive features
 */

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    initializeCollapsibles();
    console.log('Main.js initialized');
});

/**
 * Initialize collapsible sections functionality
 * Handles the expanding/collapsing content sections
 */
function initializeCollapsibles() {
    console.log('Initializing collapsible elements...');
    
    // Small delay to ensure all content is loaded
    setTimeout(function() {
        const collapsibleButtons = document.querySelectorAll('.collapsible');
        console.log(`Found ${collapsibleButtons.length} collapsible buttons`);
        
        collapsibleButtons.forEach(function(button, index) {
            console.log(`Setting up collapsible button ${index + 1}`);
            
            button.addEventListener("click", function() {
                console.log('Collapsible clicked:', this.textContent.trim());
                
                // Toggle the active class on the button
                this.classList.toggle("active");
                
                // Find the corresponding content div
                // Jekyll sometimes wraps buttons in <p> tags, so we need to handle both cases
                let content = this.nextElementSibling;
                
                // If button is wrapped in a <p> tag, look for content after the parent
                if (!content || !content.classList.contains('collapsible-content')) {
                    const buttonParent = this.parentElement;
                    content = buttonParent.nextElementSibling;
                }
                
                if (content && content.classList.contains('collapsible-content')) {
                    toggleCollapsibleContent(content, this.classList.contains('active'));
                } else {
                    console.warn('Could not find corresponding .collapsible-content for button:', this.textContent.trim());
                }
            });
        });
        
        console.log('Collapsible setup completed successfully');
    }, 100); // Reduced delay for better performance
}

/**
 * Toggle the visibility of collapsible content
 * @param {Element} content - The content element to toggle
 * @param {boolean} shouldOpen - Whether to open (true) or close (false) the content
 */
function toggleCollapsibleContent(content, shouldOpen) {
    if (shouldOpen) {
        // Open the content
        content.style.maxHeight = content.scrollHeight + "px";
        content.classList.add("active");
        console.log(`Opening content, height: ${content.scrollHeight}px`);
    } else {
        // Close the content
        content.style.maxHeight = "0px";
        content.classList.remove("active");
        console.log('Closing content');
    }
}

/**
 * Utility function to close all collapsible sections
 * Can be called externally if needed
 */
function closeAllCollapsibles() {
    const activeButtons = document.querySelectorAll('.collapsible.active');
    activeButtons.forEach(button => {
        button.click(); // Trigger the click to close
    });
}

/**
 * Utility function to open a specific collapsible by ID or text content
 * @param {string} identifier - Either the ID of the button or its text content
 */
function openCollapsible(identifier) {
    const buttons = document.querySelectorAll('.collapsible');
    const targetButton = Array.from(buttons).find(button => 
        button.id === identifier || 
        button.textContent.trim().toLowerCase().includes(identifier.toLowerCase())
    );
    
    if (targetButton && !targetButton.classList.contains('active')) {
        targetButton.click();
    }
}

// Export functions for external use if needed
window.closeAllCollapsibles = closeAllCollapsibles;
window.openCollapsible = openCollapsible;
