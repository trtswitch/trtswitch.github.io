document.addEventListener('DOMContentLoaded', function() {
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
});
