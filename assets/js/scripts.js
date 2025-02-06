// assets/js/scripts.js

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    /* ===========================================
       Dynamic Advertisement Images for index.html
    ============================================ */
    const adImageElement = document.getElementById('ad-image');
    if (adImageElement) {
        const adImages = [
            'assets/images/ad1.jpg',
            'assets/images/ad2.jpg',
            'assets/images/ad3.jpg'
            // Add more ad images as needed
        ];
        let currentAd = 0;
        const totalAds = adImages.length;

        // Function to change the advertisement image
        function changeAdImage() {
            currentAd = (currentAd + 1) % totalAds;
            adImageElement.src = adImages[currentAd];
            adImageElement.classList.add('animate__animated', 'animate__fadeIn');
            
            // Remove animation classes after animation ends to allow re-animation
            adImageElement.addEventListener('animationend', () => {
                adImageElement.classList.remove('animate__animated', 'animate__fadeIn');
            }, { once: true });
        }

        // Initial call to set the first ad image (optional if already set in HTML)
        // adImageElement.src = adImages[currentAd];

        // Change image every 5 seconds
        setInterval(changeAdImage, 5000);
    }

    /* ===========================================
       Contact Form Submission Handling for Contact.html
    ============================================ */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const formMessage = document.getElementById('formMessage');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Basic form validation (can be expanded as needed)
            const name = contactForm.elements['name'].value.trim();
            const email = contactForm.elements['email'].value.trim();
            const subject = contactForm.elements['subject'].value.trim();
            const message = contactForm.elements['message'].value.trim();

            if (name === '' || email === '' || subject === '' || message === '') {
                alert('Please fill in all required fields.');
                return;
            }

            // TODO: Integrate with backend or form handling service (e.g., Formspree)
            // Example using Fetch API to send form data
            /*
            fetch('https://your-backend-endpoint.com/form-submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, subject, message }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    formMessage.classList.remove('d-none');
                    contactForm.reset();
                } else {
                    alert('There was an error submitting your form. Please try again.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('There was an error submitting your form. Please try again.');
            });
            */

            // For demonstration purposes, we'll show the success message without actual submission
            formMessage.classList.remove('d-none');
            contactForm.reset();

            // Optionally, hide the success message after 5 seconds
            setTimeout(() => {
                formMessage.classList.add('d-none');
            }, 5000);
        });
    }

    /* ===========================================
       Smooth Scrolling for Anchor Links (Optional)
    ============================================ */
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ===========================================
       Additional Interactive Features (Optional)
    ============================================ */

    // Example: Toggle mobile navigation with animation
    /*
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.getElementById('navbarNav');

    navbarToggler.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('animate__fadeInDown');
            navbarCollapse.classList.add('animate__fadeOutUp');
        } else {
            navbarCollapse.classList.remove('animate__fadeOutUp');
            navbarCollapse.classList.add('animate__fadeInDown');
        }
    });
    */

    // Example: Initialize Bootstrap tooltips (if used)
    /*
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    */
});