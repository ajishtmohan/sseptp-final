<?php
/*
Template Name: Placement Child Page
*/
?>

<?php get_header(); ?>

<?php 
  while(have_posts()) {
    the_post(); ?>
      
      <div class="course-page">
      <div class="course-page__topband">
        <div class="course-page-top-band__header">
          <div class="course-page-top-band__header--title">
            <h1> <?php the_title(); ?></h1>
          </div>
          <div class="course-page-top-band__header--image">
          <img src="<?php echo get_theme_file_uri('/assets/img/'); echo single_post_title();?>.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="placement-page-content">
      <div class="placement-page-content__main">
        
        <?php the_content(); ?>

      </div>

      <div class="placement-page-content__sidebar">
        <div class="placement-page-content__sidebar--links">
          <h3>Courses</h3>
          <ul>
            <li><a href="/placements/objectives/">Objectives</a></li>
            <li>
              <a href="/placements/t-p-team/">T & P Team</a>
            </li>
            <li><a href="/placements/statistics/">Statistics</a></li>
            <li><a href="/placements/activities/">Activities</a></li>
          </ul>
        </div>
        <div class="placement-page-content__sidebar--contact">
          <h3>Department Contact Info</h3>
          <p>+91 9100974538</p>
          <p>placements@sseptp.org</p>
          <p class="contact-timing">Mon – Fri: 9:00 A.M. – 5:00 P.M.</p>
        </div>
      </div>

    </div>
    <section class="recruitments">
      <div class="recruitments-details">
        <h2 class="recruitments-details__h2">Testimonials</h2>
        <?php echo do_shortcode('[slide-anything id="858"]'); ?>
      </div>
    </section>


<?php }

get_footer(); ?>
