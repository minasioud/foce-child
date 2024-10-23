<?php
get_header();
?>
    <main id="primary" class="site-main">
        <!--  l'animation video -->
        <section class="banner">
            <div class="video-container parallax-container banner-image">
               
                <video autoplay muted loop id="background-video" class="parallax-video">
                    <source src=" <?php echo get_stylesheet_directory_uri() . '/assets/video/StudioKoukaki-video.mp4'; ?>" type="video/mp4" >
                </video>
                <!-- L'image de remplacement pour les petits écrans -->                
				<img class="mobile-banner-image" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/banner.png'; ?>" alt="Studio Koukaki Banner">
            </div>
            <!-- Ajouter une class banner_logo pour ajuster l'animation sur le logo -->
            <img class="floating-title" src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
        </section>

        <!-- Section story ----------------------------------------->
        <section id="story" class="story">
            <!-- article histoire ---------------------------------->
            <h2 class="bg-style"><span class="font-style">L'histoire</span></h2>
            <article id="art-hist" class="story__article">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>
            <!-- FIN article histoire ---------------------------------->

            <!-- article personnages -------------------------------------------->
            <?php
            $args = array(
                'post_type' => 'characters',
                'posts_per_page' => -1,
                'meta_key'  => '_main_char_field',
                'orderby'   => 'meta_value_num',

            );
            $characters_query = new WP_Query($args);
            ?>

            <article id="characters">
                <div class="main-character">
                    <div class="title-character">
                        <h3 class="bg-style-3"><span class="font-style">Les personnages</span></h3>
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
                        <!-- Add navigation arrows 
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    
                        <div class="pagination-character">
                             Add pagination (optional) 
                            <div class="swiper-pagination"></div>
                        </div>-->
                    </div>
                    <!-- End Swiper Container -->
                </div>
            </article> 
            <!-- FIN article personnages -------------------------------------------->
            
            <!-- Article lieu ----------------------------------------->

            <article id="place" class="lieu-container">
                
                <div >
                    <h3 class="bg-style-3"><span class="font-style">Le Lieu</span></h3>
                    <p><?php echo get_theme_mod('place'); ?></p>
                </div>
                   
                <!-- Ajouter une class lieu nuage pour ajuster l'animation -->
                
                <img class="floating-lieu-nuage-1" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/nuage1.png'; ?> " alt="nuage1">

                <img class="floating-lieu-nuage-2" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/nuage2.png'; ?> " alt="nuage2">
               
                
            
            </article>
            <!-- FIN Article lieu -------------------------------------------->
        </section>
        <!-- Section story ----------------------------------------->
      
        <section id="studio">
            <h2 class="bg-style"><span class="font-style1">Studio</span> <span class="font-style2">Koukaki</span></h2>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
            </section>
    </main><!-- #main -->
<?php
get_footer();