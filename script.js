


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
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}