// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Close menu when clicking a link (optional)
const navLinks = document.querySelectorAll('.main-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
    });
});
