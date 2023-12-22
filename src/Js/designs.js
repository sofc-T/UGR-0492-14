document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.getElementById('menu');
    var navLinks = document.querySelector('nav ul');

    menuButton.addEventListener('click', function(event) {
        event.stopPropagation(); 
        if (navLinks.style.display === 'none' || navLinks.style.display === '') {
            navLinks.style.display = 'block';
        } else {
            navLinks.style.display = 'none';
        }
    });

    document.addEventListener('click', function(event) {
        var target = event.target;
        var isSmallScreen = window.innerWidth < 768;

        if (isSmallScreen && target !== menuButton && !navLinks.contains(target)) {
            navLinks.style.display = 'none';
        }
    });
});