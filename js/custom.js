document.addEventListener("DOMContentLoaded", (event) => {


    const burgerMenu = document.querySelector('.burger-menu');
    const mstory = document.querySelector('.mstory');
    const mcharac = document.querySelector('.mcharac');
    const menuOverlay = document.querySelector('.menu-overlay');

    function toggleMenu() {
        document.body.classList.toggle('menu-open'); // Ajoute/Retire la classe menu-open
    }

    if (burgerMenu) {
        burgerMenu.addEventListener('click', toggleMenu);
        mstory.addEventListener('click', toggleMenu);
        mcharac.addEventListener('click', toggleMenu);
    }


    // Slider animation
    const slider = document.querySelector('.banner');
    if (slider) {
        slider.classList.add('visible'); // Ajouter la classe "visible" pour déclencher l'animation
    }

    const video = document.querySelector('#background-video');
    const mobileBannerImage = document.querySelector('.mobile-banner-image');

    function handleVideoOnMobile() {
        if (window.innerWidth <= 700) {
            if (video) {
                video.pause();
                video.style.display = 'none'; // Cacher la vidéo
            }
            if (mobileBannerImage) {
                mobileBannerImage.style.display = 'block'; // Afficher l'image
            }
        } else {
            if (video) {
                video.play();
                video.style.display = 'block'; // Afficher la vidéo
            }
            if (mobileBannerImage) {
                mobileBannerImage.style.display = 'none'; // Cacher l'image
            }
        }
    }

    // Lancer la fonction au chargement de la page et au redimensionnement
    handleVideoOnMobile();
    window.addEventListener('resize', handleVideoOnMobile);


    // Simple Parallax for images
    var images = document.querySelectorAll('.parallax-image');
    if (images.length) {
        new simpleParallax(images, {
            scale: 1.5, // Ajustez l'effet de zoom si nécessaire
            delay: 0.6, // Délai entre les animations
            transition: 'cubic-bezier(0,0,0,1)', // Type de transition
            orientation: 'up' // 'up', 'down', 'left', 'right'
        });
    }

    // Swiper configuration
    const swiperContainer = document.querySelector('.swiper-container');
    if (swiperContainer) {
        const swiper = new Swiper('.swiper-container', {
            direction: 'horizontal', // Définit la direction horizontale (gauche -> droite)
            loop: true, // Permet de faire défiler en boucle

            autoplay: {
                delay: 1500, // Délai entre chaque diapositive
                disableOnInteraction: false,
            },
            initialSlide: 0, // Pour être sûr de démarrer sur la première diapositive
            speed: 600, // Durée de transition plus douce
            slidesPerView: 'auto', // Laisse le Swiper gérer automatiquement le nombre de diapositives visibles
            centeredSlides: false, // Centre les diapositives
            spaceBetween: 50, // Espace entre les diapositives
            effect: 'coverflow', // Activer l'effet Cover Flow
            grabCursor: true,
            coverflowEffect: {
                rotate: 50, // Angle de rotation des diapositives
                stretch: 0, // Espace entre les diapositives
                depth: 100, // Proximité des diapositives
                modifier: 1, // Ajuste la puissance de l'effet
                slideShadows: false, // Ajouter des ombres aux diapositives
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }

});


const nuage1 = document.querySelector('.floating-lieu-nuage-1');
const nuage2 = document.querySelector('.floating-lieu-nuage-2');
const positionNuage = document.querySelector('#place');
const positionHistoire = document.querySelector('#story');
const positionHistoiretitre = document.querySelector('#story').querySelector('.bg-style').querySelector('span');

// Attendre que le DOM soit complètement chargé
document.addEventListener('scroll', () => {
    // Récupérer la position de défilement
    const scrollPosition = window.scrollY;
    console.log(positionHistoire.offsetTop, scrollPosition);
    //apparition de titre 
    const visibleHistoire = scrollPosition - (positionHistoire.offsetTop + 100);
    if (visibleHistoire > 0) {
        positionHistoiretitre.classList.add('visible');
    }

    // Vérifier que les nuages existent dans le DOM
    if (nuage1 && nuage2) {
        // Écouter l'événement de défilement



        const visible = scrollPosition - (positionNuage.offsetTop + 500);
        if (visible > 0 && visible < 450) {

            // Calculer la nouvelle position pour chaque nuage
            nuage1.style.transform = ` translateX(-${visible / 1.5}px)`;
            nuage2.style.transform = ` translateX(-${visible / 1.5}px)`;
        }


    }

    const parallaxContainer = document.querySelector('.parallax-container');
    const parallaxVideo = document.querySelector('.parallax-video');

    if (parallaxVideo && parallaxContainer) {
        // Optimisation avec requestAnimationFrame pour le parallax de la vidéo

        const scrollPosition = window.scrollY; // Récupérer la position de défilement
        const offset = parallaxContainer.offsetTop;

        window.requestAnimationFrame(() => {
            // Ajuster la vitesse de l'effet parallax ici (0.5 est un bon point de départ)
            const speed = 0.5;
            const distance = (scrollPosition - offset) * speed;

            // Appliquer la transformation parallax à la vidéo
            parallaxVideo.style.transform = `translate3d(-50%, calc(-50% + ${distance}px), 0)`;
        });

    }
});
