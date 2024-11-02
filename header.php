<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

	<header id="masthead" class="site-header">
    <nav >
            
            <!-- Titre au centre -->
            <div class="site-title-container">
                <h1>Fleurs d'oranger &amp; chats errants</h1>
            </div>

            <!-- Bouton du menu burger à droite -->
            <div class="burger-menu" onclick="toggleMenu()">
                <span></span>
                <span></span>
                <span></span>
            </div>     
            
            <!-- Menu burger caché par défaut -->
            <div class="menu-overlay">
                <ul>
                    <li><img class="mlogo" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/mlogo.png'; ?> " alt="logo Fleurs d'oranger & chats errants"></li>
                    <li><a href="#id_story" class="mstory">Histoire</a></li>
                    <li><a href="#characters" class="mcharac">Personnages</a></li>
                    <li><a href="#place" class="mplace">Lieu</a></li>
                    <li><a href="#studio" class="mstudio">Studio Koukaki</a></li>
                </ul>
                     
                <!-- Lien STUDIO KOUKAKI en bas du menu burger -->
                <div class="menu-footer">
                    <a href="#studio">STUDIO KOUKAKI</a>
                </div>
            </div>
                
		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->