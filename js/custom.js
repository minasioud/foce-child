document.addEventListener("DOMContentLoaded", (event) => {
    
    // Slider animation
    const slider = document.querySelector('.banner');
    if (slider) {
        slider.classList.add('visible'); // Ajouter la classe "visible" pour déclencher l'animation
    }

    const video = document.querySelector('#background-video');
    const mobileBannerImage = document.querySelector('.mobile-banner-image');

    function handleVideoOnMobile() {
        if (window.innerWidth <= 700) {
            video.pause();
            video.style.display = 'none'; // Cacher la vidéo
            mobileBannerImage.style.display = 'block'; // Afficher l'image
        } else {
            video.play();
            video.style.display = 'block'; // Afficher la vidéo
            mobileBannerImage.style.display = 'none'; // Cacher l'image
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
              loop: true, // Permet de faire défiler en boucle
              navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
              },
              pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
              },
              autoplay: {
                  delay: 1500, // Délai entre chaque diapositive
                  disableOnInteraction: false,
              },
               speed: 600, // Durée de transition plus douce
              slidesPerView: 'auto', // Laisse le Swiper gérer automatiquement le nombre de diapositives visibles
              centeredSlides: true, // Centre les diapositives
              spaceBetween: 50, // Espace entre les diapositives
              direction: 'horizontal', // Définit la direction horizontale (gauche -> droite)
              effect: 'coverflow', // Activer l'effet Cover Flow
              coverflowEffect: {
                  rotate: 50, // Angle de rotation des diapositives
                  stretch: 0, // Espace entre les diapositives
                  depth: 10, // Proximité des diapositives
                  modifier: 1, // Ajuste la puissance de l'effet
                  slideShadows: false, // Ajouter des ombres aux diapositives
              },
          });
      }
 
});




// Parallax effect on scroll (optimisation avec requestAnimationFrame)
document.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const parallaxContainer = document.querySelector('.parallax-container');
    const parallaxVideo = document.querySelector('.parallax-video');

    if (parallaxVideo && parallaxContainer) {
        // Optimisation avec requestAnimationFrame
        window.requestAnimationFrame(() => {
            // Ajustez la vitesse de l'effet parallax ici (0.5 est un bon point de départ)
            const speed = 0.5;
            const offset = parallaxContainer.offsetTop;
            const distance = (scrollPosition - offset) * speed;
            
            // Appliquer la transformation parallax à la vidéo
            parallaxVideo.style.transform = `translate3d(-50%, calc(-50% + ${distance}px), 0)`;
        });
    }
});