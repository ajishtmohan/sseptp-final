<?php
/*
Template Name: Faculties
*/
?>

<?php get_header(); ?>

<?php 
  while(have_posts()) {
    the_post(); ?>
      
      <div class="faculty-page">
      <div class="faculty-page__topband">
        <div class="faculty-page-top-band__header">
          <div class="faculty-page-top-band__header--title">
          <h1><?php the_title(); ?> </h1>
          </div>
          <div class="faculty-page-top-band__header--image">
            <img src="<?php echo get_theme_file_uri('/assets/img/'); echo single_post_title();?>.jpg" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>

    <div class="faculty-page-content">
      <div class="faculty-page-content__main">

      <?php the_content(); ?>
      
        
      </div>

      <div class="faculty-page-content__sidebar">
        <div class="faculty-page-content__sidebar--links">
          <h3>Faculties</h3>
          <ul>
            <li><a href="/academics/sse-faculty/cse-department">CSE</a></li>
            <li><a href="/academics/sse-faculty/ece-department">ECE</a></li>
            <li><a href="/academics/sse-faculty/eee-department/">EEE</a></li>
            <li><a href="/academics/sse-faculty/mechanical-department/">MECHANICAL</a></li>
            <li><a href="/facilities/civil-department">CIVIL</a></li>
            <li><a href="/facilities/humanity-science">HUMANITY AND SCIENCE</a></li>
          </ul>
        </div>
      </div>
    </div>

<?php }

get_footer(); ?>
