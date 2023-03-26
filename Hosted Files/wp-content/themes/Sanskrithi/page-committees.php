<?php
/*
Template Name: Committees
*/
?>

<?php get_header(); ?>

<?php 
  while(have_posts()) {
    the_post(); ?>
      
      <div class="committee-page">
      <div class="committee-page__topband">
        <div class="committee-page-top-band__header">
          <div class="committee-page-top-band__header--title">
            <h1><?php the_title(); ?></h1>
          </div>
        </div>
      </div>
    </div>

    <div class="committees-page-content">
      <div class="committees-page-content__main">

      <?php the_content(); ?>
        
      </div>
    </div>

<?php }

get_footer(); ?>
