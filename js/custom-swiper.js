document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
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
            delay: 3000, // Délai entre chaque diapositive
            disableOnInteraction: false,
        },
        slidesPerView: 1, // Afficher une diapositive à la fois
        spaceBetween: 30, // Espace entre les diapositives
        effect: 'coverflow', // Activer l'effet Cover Flow
        coverflowEffect: {
            rotate: 50, // Angle de rotation des diapositives
            stretch: 0, // Espace entre les diapositives
            depth: 100, // Proximité des diapositives
            modifier: 1, // Ajuste la puissance de l'effet
            slideShadows: true, // Ajouter des ombres aux diapositives
        },
    });
});
