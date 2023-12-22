document.addEventListener('DOMContentLoaded', function() {
    var controlItems = document.querySelectorAll('.main_control');

    controlItems.forEach(function(controlItem) {
        controlItem.addEventListener('click', function() {
            var allHiddenElements = document.querySelectorAll('.hiFiles');
            
            allHiddenElements.forEach(function(hiddenElement) {
                hiddenElement.style.display = 'none';
            });

            var currentHiddenElement = controlItem.closest('.main_dropdowneach').querySelector('.hiFiles');
            
            if (currentHiddenElement.style.display === 'none' || currentHiddenElement.style.display === '') {
                currentHiddenElement.style.display = 'flex';
            } else {
                currentHiddenElement.style.display = 'none';
            }
        });
    });
});


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




