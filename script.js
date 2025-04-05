
const popup = document.getElementById('myPopup');
const closeBtn = document.getElementById('closePopup');

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

// confirm booking pop up

function confirmAlert() {
    alert("Thank you for your Booking inquiry.  We will respond as soon as able.")
}


// create custom confirm pop up


