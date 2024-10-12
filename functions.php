<?php
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
        const slider = document.querySelector('.banner');
        slider.classList.add('visible');  // Ajouter la classe "visible" pour déclencher l'animation
    });
    </script>
    <?php
}
add_action('wp_footer', 'wpb_hook_javascript_footer');
