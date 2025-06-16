document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const headerNav = document.getElementById('header-nav');
    const navLinks = headerNav.getElementsByTagName('a');

    // Открытие/закрытие мобильного меню
    mobileMenuButton.addEventListener('click', function() {
        headerNav.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Закрытие меню при клике на ссылку
    Array.from(navLinks).forEach(link => {
        link.addEventListener('click', function() {
            headerNav.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Закрытие меню при клике вне меню
    document.addEventListener('click', function(event) {
        if (!headerNav.contains(event.target) && !mobileMenuButton.contains(event.target)) {
            headerNav.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
});