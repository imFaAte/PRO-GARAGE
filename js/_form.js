document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = contactForm.querySelector('input[type="text"]').value;
            const phone = contactForm.querySelector('input[type="tel"]').value;
            const time = contactForm.querySelectorAll('input[type="text"]')[1].value;

            console.log('Form Submitted!');
            console.log('Name:', name);
            console.log('Phone:', phone);
            console.log('Preferred Time:', time);

            // You can add an AJAX request here to send data to a backend
            alert('Спасибо за ваше обращение! Мы свяжемся с вами в ближайшее время.');

            contactForm.reset();
        });
    }
}); 