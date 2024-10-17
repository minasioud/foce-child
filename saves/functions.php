<?php
// Enqueue SimpleParallax.js dans WordPress depuis votre dossier assets
function enqueue_simpleparallax_js() {
    wp_enqueue_script('simpleparallax-js', get_template_directory_uri() . '/js/simpleParallax.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'enqueue_simpleparallax_js');



add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}

// Synchroniser les options du customizer du parent
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // Empêcher la mise à jour des options du thème enfant
    }, 10, 2 );

    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    });
}



// Ajout de JavaScript dans le footer
function wpb_hook_javascript_footer() {
    ?>
   

    <script>
document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('background-video');
    const videoContainer = document.querySelector('.video-container');

    // Vérifie si les éléments sont bien trouvés
    if (!video || !videoContainer) {
        console.log("Éléments manquants : vidéo ou conteneur");
        return;
    }

    // Lorsque la vidéo est prête
    video.addEventListener('canplay', function() {
        console.log("La vidéo est prête à être lue");
        video.classList.remove('hidden-video');
        videoContainer.classList.add('video-loaded');
    });

    // Initialisation de SimpleParallax
    var images = document.querySelectorAll('.parallax-image');
    new SimpleParallax(images);

    console.log("Script chargé et prêt");
});

       
</script>
    <?php
}
add_action('wp_footer', 'wpb_hook_javascript_footer');


// Enqueue SwiperJS and custom swiper initialization script
function enqueue_custom_swiper_js() {
    // Swiper CSS
    wp_enqueue_style('swiper-css', 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css');

    // Swiper JS
    wp_enqueue_script('swiper-js', 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js', array(), null, true);

    // Custom Swiper initialization script
    wp_enqueue_script('custom-swiper-js', get_stylesheet_directory_uri() . '/js/custom-swiper.js', array('swiper-js'), null, true);
}
add_action('wp_enqueue_scripts', 'enqueue_custom_swiper_js');
