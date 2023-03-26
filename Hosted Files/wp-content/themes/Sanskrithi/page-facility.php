<?php
/*
Template Name: Facility
*/
?>

<?php get_header(); ?>

<?php 
  while(have_posts()) {
    the_post(); ?>
      
      <div class="facility-page">
      <div class="facility-page__topband">
        <div class="facility-page-top-band__header">
          <div class="facility-page-top-band__header--title">
            <h1><?php the_title(); ?> </h1>
          </div>
          <div class="facility-page-top-band__header--image">
            <img src="<?php echo get_theme_file_uri('/assets/img/'); echo single_post_title();?>.jpg" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>

    <div class="facility-page-content">
      <div class="facility-page-content__main">

      <?php the_content(); ?>

      </div>

      <div class="facility-page-content__sidebar">
        <div class="facility-page-content__sidebar--links">
          <h3>Facilities</h3>
          <ul>
            <li><a href="/facilities/sse-campus">SSE Campus</a></li>
            <li>
              <a href="/facilities/library">Library</a>
            </li>
            <li><a href="/facilities/it-infrastructure">IT Infrastructure</a></li>
            <li><a href="/facilities/sports-ground">Sports</a></li>
            <li><a href="/facilities/student-residential-facilities">Residential Facility</a></li>
            <li><a href="/facilities/transportation/">Transport</a></li>
          </ul>
        </div>
      </div>
    </div>

<?php }

get_footer(); ?>
