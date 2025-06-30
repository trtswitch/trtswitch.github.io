document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, looking for collapsible elements...');
    
    // Wait a bit more for Jekyll to finish rendering
    setTimeout(function() {
        var collapsibleButtons = document.querySelectorAll('.collapsible');
        console.log('Found', collapsibleButtons.length, 'collapsible buttons');
        
        collapsibleButtons.forEach(function(button, index) {
            console.log('Setting up button', index);
            
            button.addEventListener("click", function() {
                console.log('Button clicked:', this.textContent);
                
                // Toggle the active class
                this.classList.toggle("active");
                
                // Get the next element (should be the content div)
                var content = this.nextElementSibling;
                
                if (content && content.classList.contains('collapsible-content')) {
                    console.log('Found content div');
                    
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
                    console.log('No content div found after button');
                }
            });
        });
        
        console.log('Collapsible setup complete!');
    }, 500); // Wait 500ms for content to be ready
});
