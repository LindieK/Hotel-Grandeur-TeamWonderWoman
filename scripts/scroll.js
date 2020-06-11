const navbar = document.querySelector('.navbar-custom');

window.addEventListener('scroll', () => {
    if(window.scrollY == 0) {
        navbar.style.backgroundColor = '';
        navbar.style.borderBottomColor = "#ffffff";
    } else {
        navbar.style.backgroundImage = "radial-gradient( circle farthest-corner at 22.4% 21.7%,  rgba(4,189,228,0.5) 0%, rgba(2,83,185,0.5) 100.2% )";
        navbar.style.borderBottomColor = "#3B8CC6";
    }
});
