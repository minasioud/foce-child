document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.parallax-image');
    if (images.length) {
        new simpleParallax(images, {
            scale: 1.5, // Ajustez l'effet de zoom si nécessaire
            delay: 0.6, // Délai entre les animations
            transition: 'cubic-bezier(0,0,0,1)', // Type de transition
            orientation: 'up' // Vous pouvez changer la direction de l'effet : 'up', 'down', 'left', 'right'
        });
    }
});


document.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var parallaxContainer = document.querySelector('.parallax-container');
    var parallaxVideo = document.querySelector('.parallax-video');

    if (parallaxVideo && parallaxContainer) {
        // Réduire ou augmenter la vitesse de l'effet parallax ici (0.5 est un bon point de départ)
        var speed = 0.5;
        var offset = parallaxContainer.offsetTop;
        var distance = (scrollPosition - offset) * speed;

        // Appliquer la transformation parallax à la vidéo
        parallaxVideo.style.transform = 'translate3d(-50%, calc(-50% + ' + distance + 'px), 0)';
    }
});
