
const popup = document.getElementById('myPopup');
const closeBtn = document.getElementById('closePopup');
const scrollSections = document.querySelectorAll('.scroll-section');

// Email Booking 


(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "mHX_GglA20SntKwJ2",
    });
})();



window.onload = function() {
    document.getElementById('bookingForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(() => {
                popup.style.display = 'block'; // Show the popup
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });

            
    });

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none'; // Hide the popup
      });
    
      // Close the popup if the user clicks outside of it
      window.addEventListener('click', function(event) {
        if (event.target === popup) {
          popup.style.display = 'none';
        }
    });
}

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

