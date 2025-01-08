// Adding animations and interactivity

// On page load animation
window.onload = () => {
    document.body.classList.add('fade-in');
};

// Search Input Animation
const searchInput = document.querySelector('main input');
searchInput.addEventListener('focus', () => {
    searchInput.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.2)';
});
searchInput.addEventListener('blur', () => {
    searchInput.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
});

// Smooth Scroll for Header Links
const headerLinks = document.querySelectorAll('header ul li a');
headerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Background Color Shift on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#e53935';
    } else {
        header.style.backgroundColor = '#ff4c4c';
    }
});
