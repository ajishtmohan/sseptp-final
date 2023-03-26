<?php
/*
Template Name: All Courses
*/
?>

<?php get_header(); ?>

<?php 
  while(have_posts()) {
    the_post(); ?>
      
      <div class="courses-page">
      <div class="courses-page__topband">
        <div class="courses-page-top-band__header">
          <div class="courses-page-top-band__header--title">
            <h1>Courses</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="courses-page-content">
      <div class="courses-page-content__main">
        
      <?php the_content(); ?>

      </div>      
    </div>


<?php }

get_footer(); ?>
