// Wait for the page to load completely
document.addEventListener('DOMContentLoaded', function() {
    
    // Make collapsible sections work
    var collapsibleButtons = document.getElementsByClassName("collapsible");
    
    for (var i = 0; i < collapsibleButtons.length; i++) {
        collapsibleButtons[i].addEventListener("click", function() {
            // Toggle the active class (changes color and +/- symbol)
            this.classList.toggle("active");
            
            // Get the content section right after this button
            var content = this.nextElementSibling;
            
            // Toggle the content visibility
            if (content.style.maxHeight && content.style.maxHeight !== "0px") {
                // Currently open - close it
                content.style.maxHeight = "0px";
                content.classList.remove("active");
            } else {
                // Currently closed - open it
                content.style.maxHeight = content.scrollHeight + "px";
                content.classList.add("active");
            }
        });
    }
    
    // Smooth scrolling for internal links (like #rpsftm)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    console.log('trtswitch website loaded successfully!');
});
