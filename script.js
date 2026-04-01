// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 50
    });
});

// Initialize EmailJS (Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS key)
(function() {
    // emailjs.init("YOUR_PUBLIC_KEY");
})();

// Handle form submission
function handleSubmission(event) {
    event.preventDefault();
    const btn = document.getElementById('submit-btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Sending...';

    // Example EmailJS setup
    /*
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', event.target)
        .then(() => {
            btn.innerHTML = 'Submitted Successfully';
            event.target.reset();
            setTimeout(() => btn.innerHTML = originalText, 3000);
        }, (error) => {
            btn.innerHTML = 'Error Submitting';
            console.log('FAILED...', error);
            setTimeout(() => btn.innerHTML = originalText, 3000);
        });
    */
   
    // Simulation for demo purposes
    setTimeout(() => {
        btn.innerHTML = 'Manuscript Submitted';
        event.target.reset();
        setTimeout(() => btn.innerHTML = originalText, 3000);
    }, 1500);
}