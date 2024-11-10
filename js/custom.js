document.addEventListener("DOMContentLoaded", (event) => {

    //Déclarer toutes les const à l'intérieur du premier DOMContentLoaded pour éviter les erreurs si le DOM n'est pas encore prêt
    const burgerMenu = document.querySelector('.burger-menu');
    const mstory = document.querySelector('.mstory');
    const mcharac = document.querySelector('.mcharac');
    const mplace = document.querySelector('.mplace');
    const mstudio = document.querySelector('.mstudio');
    const menuOverlay = document.querySelector('.menu-overlay');

    // Slider animation
    const slider = document.querySelector('.banner');

    // Gestion de la vidéo mobile / image de bannière
    const video = document.querySelector('#background-video');
    const mobileBannerImage = document.querySelector('.mobile-banner-image');

    //Déclaration const parallax de la vidéo
    const parallaxContainer = document.querySelector('.parallax-container');
    const parallaxVideo = document.querySelector('.parallax-video');

    //Déclaration const nuage1 et nuage2
    const nuage1 = document.querySelector('.floating-lieu-nuage-1');
    const nuage2 = document.querySelector('.floating-lieu-nuage-2');
    const positionNuage = document.querySelector('#place');

    // Sélectionne le titre de la section histoire
    const storyTitle = document.querySelector('.hist-title.hidden');

    // Sélectionne le titre de la section studio
    const studioTitle1 = document.querySelector('.studio-title1.hidden');
    const studioTitle2 = document.querySelector('.studio-title2.hidden');

    // Fonction de basculement du menu
    function toggleMenu() {
        document.body.classList.toggle('menu-open'); // Ajoute/Retire la classe menu-open
    }

    if (burgerMenu) {
        burgerMenu.addEventListener('click', toggleMenu);
        mstory.addEventListener('click', toggleMenu);
        mcharac.addEventListener('click', toggleMenu);
        mplace.addEventListener('click', toggleMenu);
        mstudio.addEventListener('click', toggleMenu);
    }


    // Slider animation
    if (slider) {
        slider.classList.add('visible'); // Ajouter la classe "visible" pour déclencher l'animation
    }


    // Gestion de la vidéo mobile / image de bannière
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
                rotate: 30, // Angle de rotation des diapositives
                stretch: 0, // Espace entre les diapositives
                depth: 100, // Proximité des diapositives
                modifier: 1, // Ajuste la puissance de l'effet
                slideShadows: false, // Ajouter des ombres aux diapositives
            },

            // Utilisation de breakpoints pour adapter l'affichage sur mobile
            breakpoints: {
                // Configuration pour les écrans de 700px ou moins
                700: {
                    slidesPerView: 1, // Affiche une seule diapositive
                    spaceBetween: 20, // Réduit l'espace entre les diapositives
                    centeredSlides: true, // Centre la diapositive sur l'écran mobile
                    coverflowEffect: {
                        rotate: 0, // Réduit l'angle de rotation sur mobile
                        depth: 0, // Diminue la profondeur de l'effet sur mobile
                    },
                },
                // Configuration pour les écrans tablettes 701px -> 1192px
                701: {
                    slidesPerView: 'auto', // Affiche plusieurs diapositives
                    spaceBetween: 10, // Espace entre les diapositives pour un affichage plus espacé
                    centeredSlides: false, // Désactive le centrage
                    coverflowEffect: {
                        rotate: 30, // Angle de rotation plus prononcé
                        depth: 100, // Proximité des diapositives
                    },
                },
                // Configuration pour les écrans plus grands que 1193px
                1193: {
                    slidesPerView: 'auto', // Affiche plusieurs diapositives
                    spaceBetween: 50, // Espace entre les diapositives pour un affichage plus espacé
                    centeredSlides: false, // Désactive le centrage
                    coverflowEffect: {
                        rotate: 30, // Angle de rotation plus prononcé
                        depth: 100, // Proximité des diapositives
                    },
                },
            },

        });
    }

    //JS Animation titre histoire et les titres de studio
    // Fonction pour ajouter l'animation d'apparition
    function observeTitle(title) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, { threshold: 0.5 });

        observer.observe(title);
    }

    // Observer pour le titre de l'histoire
    if (storyTitle) { observeTitle(storyTitle); }

    // Observer pour les titres de studio
    if (studioTitle1) { observeTitle(studioTitle1); }
    if (studioTitle2) { observeTitle(studioTitle2); }

    // Événement de défilement pour parallax et animation des nuages
    document.addEventListener('scroll', () => {

        // Récupérer la position de défilement
        const scrollPosition = window.scrollY;
        console.log('scrollPosition (initial):', scrollPosition);

        // JS Animation  nuage1 et nuage2
        // Vérifier que les nuages existent dans le DOM
        if (nuage1 && nuage2) {


            // Vérifier si on est sur un écran mobile (moins de 700px)
            if (window.innerWidth < 700) {
                // Calculer la position visible
                const visible = scrollPosition - (positionNuage.offsetTop + 200);

                // Afficher les valeurs dans la console
                console.log('scrollPosition (mobile):', scrollPosition);
                console.log('positionNuage.offsetTop (mobile):', positionNuage.offsetTop);
                console.log('visible (mobile):', visible);


                // Si le défilement est dans la plage souhaitée (de 0 à 750)
                if (visible > 0 && visible < 150) {
                    // Appliquer la transformation pour déplacer les nuages vers la gauche de 300px au maximum
                    nuage1.style.transform = `translateX(-${visible / 2.5}px)`; // Facteur de 2.5 pour les mobiles
                    nuage2.style.transform = `translateX(-${visible / 2.5}px)`; // Facteur de 2.5 pour les mobiles
                }
            } else {
                // Calculer la position visible
                const visible = scrollPosition - (positionNuage.offsetTop + 500);

                // Afficher les valeurs dans la console
                console.log('scrollPosition (large):', scrollPosition);
                console.log('positionNuage.offsetTop (large):', positionNuage.offsetTop);
                console.log('visible (large):', visible);

                // Si l'écran est plus large (au-dessus de 700px)
                if (visible > 0 && visible < 450) {
                    // Appliquer la transformation pour déplacer les nuages vers la gauche de 300px au maximum
                    nuage1.style.transform = `translateX(-${visible / 1.5}px)`; // Facteur de 1.5 pour les écrans larges
                    nuage2.style.transform = `translateX(-${visible / 1.5}px)`; // Facteur de 1.5 pour les écrans larges
                }
            }
        }

        //JS parallax de la vidéo
        if (parallaxVideo && parallaxContainer) {
            // Optimisation avec requestAnimationFrame pour le parallax de la vidéo
            // Récupérer la position de défilement
            const scrollPosition = window.scrollY;
            const offset = parallaxContainer.offsetTop;

            window.requestAnimationFrame(() => {
                // Ajuster la vitesse de l'effet parallax ici (0.5 est un bon point de départ)
                const speed = 0.5;
                const distance = (scrollPosition - offset) * speed;

                // Appliquer la transformation parallax à la vidéo
                parallaxVideo.style.transform = `translate3d(-50%, calc(-50% + ${distance}px), 0)`;
            });
        }

        console.log('Scroll position:', window.scrollY); // Debugging
    });
});
