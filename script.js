// Log a message when page loads
console.log("Website loaded!");

// Get the button and add interactivity
const button = document.querySelector('.cta-button');

button.addEventListener('click', function() {
    alert('Thanks for clicking! Check out my work above.');
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
