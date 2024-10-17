<?php

// Enqueue SimpleParallax.js dans WordPress depuis le dossier js
function enqueue_files() {
    wp_enqueue_script('simpleparallax-js', get_stylesheet_directory_uri() . '/js/simpleParallax.js', array(), null, true);
    wp_enqueue_script('caroussel-js', get_stylesheet_directory_uri() . '/js/caroussel.js', array('jquery', 'simpleparallax-js'), null, true);
    wp_enqueue_style('swiper', get_stylesheet_directory_uri() . '/js/swiper-bundle.min.css');
 // Enqueue the Swiper JS
 wp_enqueue_script('swiper', get_stylesheet_directory_uri() . '/js/swiper-bundle.min.js', array(), null, true);
    
 // Enqueue your custom JS file
 wp_enqueue_script('custom-swiper', get_stylesheet_directory_uri() . '/js/custom-swiper.js', array('swiper'), null, true);
 wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
 wp_enqueue_script('custom-js', get_stylesheet_directory_uri() . '/js/custom.js');


}
add_action('wp_enqueue_scripts', 'enqueue_files');

//---------------------------------------------------------------------------------------------------------------------------------------