<?php

// Enqueue les fichiers JS et CSS dans WordPress
function enqueue_files() {
    // Utiliser le CDN pour SimpleParallax.js au lieu du fichier local
    wp_enqueue_script('simpleparallax-js', 'https://cdn.jsdelivr.net/npm/simple-parallax-js@5.5.1/dist/simpleParallax.min.js', array(), '5.5.1', true);

    // Enqueue Swiper CSS et JS
    wp_enqueue_style('swiper', get_stylesheet_directory_uri() . '/js/swiper-bundle.min.css', array(), '1.0.0'); // Version indiquée ici
    wp_enqueue_script('swiper', get_stylesheet_directory_uri() . '/js/swiper-bundle.min.js', array(), '1.0.0', true);

    // Enqueue custom Swiper JS, dépendant de Swiper
    wp_enqueue_script('custom-swiper', get_stylesheet_directory_uri() . '/js/custom-swiper.js', array('swiper'), '1.0.0', true);

    // Enqueue le style du thème parent
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css', array(), wp_get_theme()->get('Version'));

    // Enqueue custom.js, dépendant de jQuery et de SimpleParallax.js
    wp_enqueue_script('custom-js', get_stylesheet_directory_uri() . '/js/custom.js', array('jquery', 'simpleparallax-js'), wp_get_theme()->get('Version'), true);
}

// Action pour charger les fichiers JS et CSS dans WordPress
add_action('wp_enqueue_scripts', 'enqueue_files');

// Synchroniser les options du Customizer entre le parent et l'enfant
if (get_stylesheet() !== get_template()) {
    // Copier les options du parent dans l'enfant et les bloquer pour l'enfant
    add_filter('pre_update_option_theme_mods_' . get_stylesheet(), function ($value, $old_value) {
        update_option('theme_mods_' . get_template(), $value);
        return $old_value; // Retourne l'ancienne valeur pour éviter l'enregistrement dans le thème enfant
    }, 10, 2);

    // Empêcher les options du thème enfant d'écraser celles du parent
    add_filter('pre_option_theme_mods_' . get_stylesheet(), function ($default) {
        return get_option('theme_mods_' . get_template(), $default);
    });
}


?>
