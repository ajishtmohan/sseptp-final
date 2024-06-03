<?php
/*
Template Name: Value Added Courses
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

    <div class="course-page-content">
      <div class="course-page-content__main">
        
      <?php the_content(); ?>

      </div>

      <div class="course-page-content__sidebar">
        <div class="course-page-content__sidebar--links">
          <h3>Courses</h3>
          <ul>
            <li><a href="/academics/courses/computer-science-and-engineering/">Computer Science & Engineering (SOSO)</a></li>
            <li>
              <a href="/academics/courses/electronics-and-communication-engineering/">Electronics & Communication Engineering (SLICE)</a>
            </li>
            <li><a href="/academics/courses/electrical-electronics-engineering-ppp/">Electrical & Electronics Engineering (PPP)</a></li>
            <li><a href="/academics/courses/mechanical-engineering-smile/">Mechanical Engineering (SMILE)</a></li>
            <li><a href="/academics/courses/civil-engineering/">Civil Engineering (FORCE)</a></li>
            <li><a href="/academics/courses/humanities-and-science/">Humanities and Science</a></li>
          </ul>
        </div>
        <div class="course-page-content__sidebar--contact">
          <h3>Department Contact Info</h3>
          <p>Beedupalli Knowledge Park, Behind SSS Super Specialty Hospital</p>
          <?php 
          if ( the_title() == "Value Added Courses") {
            <p>This is value added page</p>
          }
          ?>
          <p>+91 9100974528</p>
          <p>certifications@sseptp.org</p>
          <p class="contact-timing">Mon – Fri: 9:00 A.M. – 5:00 P.M.</p>
        </div>
      </div>
    </div>


<?php }

get_footer(); ?>