const navbar = document.querySelector('.navbar-custom');

window.addEventListener('scroll', () => {
    if(window.scrollY == 0) {
        navbar.style.backgroundColor = '';
    } else {
        navbar.style.backgroundColor = '#3B8CC6';
    }
});