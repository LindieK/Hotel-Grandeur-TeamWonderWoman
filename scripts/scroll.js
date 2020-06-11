const navbar = document.querySelector('.navbar-custom');

window.addEventListener('scroll', () => {
    if(window.scrollY == 0) {
        navbar.style.backgroundColor = '';
        navbar.style.borderBottomColor = "#ffffff";
    } else {
        navbar.style.backgroundColor = '#3B8CC6';
        navbar.style.borderBottomColor = "#3B8CC6";
    }
});
