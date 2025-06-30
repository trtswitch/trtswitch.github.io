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
    
    console.log('trtswitch website loaded successfully!');
});
