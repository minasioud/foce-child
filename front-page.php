<?php
get_header();
?>

    <main id="primary" class="site-main">
        
        <!-- DEBUT Section slider -------------------------------------------------->
        <section class="banner">
            <div class="video-container parallax-container banner-image">
                
                <!--  l'animation video -->
                <video autoplay muted loop id="background-video" class="parallax-video">
                    <source src=" <?php echo get_stylesheet_directory_uri() . '/assets/video/StudioKoukaki-video.mp4'; ?>" type="video/mp4" >
                </video>
                
                <!-- L'image de remplacement pour les petits écrans -->                
				<img class="mobile-banner-image" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/banner.png'; ?>" alt="Studio Koukaki Banner">
            </div>

            <!-- Ajouter une class banner_logo pour ajuster l'animation sur le logo -->
            <img class="floating-title" src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
        </section>
        <!-- FIN Section slider ---------------------------------------------------->
        
        <!-- DEBUT Section Story --------------------------------------------------->
        <section id="story" class="story">
            
            <!-- DEBUT Article Histoire ------------------------------------------->
            <h2 class="bg-style-hist">
                <span class="hist-title hidden">L'histoire</span><!-- ajouter la class hidden -->
            </h2> 
            <!-- article histoire ---------------------------------->
            <article class="story__article">               
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>
            <!-- FIN article Histoire --------------------------------------------->

            <!-- DEBUT Article Characters ----------------------------------------->
            <article id="characters">

                <!-- Tableau personnages -------------------------------------------->
                <?php
                $args = array(
                    'post_type' => 'characters',
                    'posts_per_page' => -1,
                    'meta_key'  => '_main_char_field',
                    'orderby'   => 'meta_value_num',

                );
                $characters_query = new WP_Query($args);
                ?>

                <div class="main-character">
                    <div class="title-character">
                        <h3 class="bg-style-3"><span class="font-style-characters">Les personnages</span></h3>
                    </div>
                    <!-- Begin Swiper Container -->    
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <?php while ($characters_query->have_posts()) {
                                $characters_query->the_post(); ?>
                                <!-- Each character slide -->
                                <div class="swiper-slide">
                                    <figure>
                                        <?php 
                                            echo get_the_post_thumbnail(get_the_ID(), 'full');
                                        ?>
                                        <figcaption><?php the_title(); ?></figcaption>
                                    </figure>
                                </div>
                            <?php } ?>
                        </div>
                    </div>
                    <!-- End Swiper Container -->
                </div>
            </article> 
            <!-- FIN article personnages ------------------------------------------>
            
            <!-- DEBUT Article lieu ----------------------------------------------->
            <article id="place" class="lieu-container">
                
                <div >
                    <h3 class="bg-style-place"><span class="font-style-place">Le Lieu</span></h3>
                    <p><?php echo get_theme_mod('place'); ?></p>
                </div>
                   
                <!-- Ajouter une class lieu nuage pour ajuster l'animation -->
                <img class="floating-lieu-nuage-1" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/nuage1.png'; ?> " alt="nuage1">

                <img class="floating-lieu-nuage-2" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/nuage2.png'; ?> " alt="nuage2">

            
            </article>
            <!-- FIN Article lieu ------------------------------------------------->

        </section>
        <!-- FIN Section Story ---------------------------------------------------->
      
        <!-- DEBUT Section studio ------------------------------------------------->
        <section id="studio">
            <h2 class="bg-style-studio">
                <span class="studio-title1 hidden">Studio</span> 
                <span class="studio-title2 hidden">Koukaki</span>
            </h2>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
        </section>
        <!-- DEBUT Section studio ------------------------------------------------->

    </main>
    <!-- FIN #main -->
<?php
get_footer();