// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on scroll
window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('animated');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    let projects = document.querySelectorAll('.project');
    projects.forEach((project, index) => {
        setTimeout(() => {
            project.classList.add('animated');
        }, index * 200); // Delay each project animation
    });
});