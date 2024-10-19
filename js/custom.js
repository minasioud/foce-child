document.addEventListener("DOMContentLoaded", (event) => {
    
    // Slider animation
    const slider = document.querySelector('.banner');
    if (slider) {
        slider.classList.add('visible'); // Ajouter la classe "visible" pour déclencher l'animation
    }

    const video = document.querySelector('#background-video');
    if (video) {
        video.addEventListener("loadeddata", (event) => {
            if (slider) {
                slider.classList.add('nobgd');
            }
        });
    }
    
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
              slidesPerView: 4, // Afficher plusieurs diapositives à la fois
              spaceBetween: 30, // Espace entre les diapositives
              direction: 'horizontal', // Définit la direction horizontale (gauche -> droite)
              rtl: false, // Désactiver le mode Right-to-Left (RTL)
              effect: 'coverflow', // Activer l'effet Cover Flow
              coverflowEffect: {
                  rotate: 0, // Angle de rotation des diapositives
                  stretch: 0, // Espace entre les diapositives
                  depth: 0, // Proximité des diapositives
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