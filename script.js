const scrollSections = document.querySelectorAll('.scroll-section');



// scrolling code gemini


function checkVisibility() {
    scrollSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Adjust the threshold as needed.  Smaller value = earlier fade-in.
        const isVisible = sectionTop < windowHeight * 0.8; // 80% of the window height

        if (isVisible) {
            section.classList.add('active');
        } else {
            section.classList.remove('active'); //remove the class if it goes out of view
        }
    });
}





window.addEventListener('scroll', checkVisibility);
checkVisibility(); // Call it on initial load, in case elements are already in view

