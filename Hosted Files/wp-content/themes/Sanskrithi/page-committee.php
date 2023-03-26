<?php
/*
Template Name: Committee
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
      
      <div class="committee-page-content">
      <div class="committee-page-content__main">
        
        <?php the_content(); ?>

      </div>
      <div class="message-page-content__sidebar">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Our&nbsp;Heritage </a></li>
          <li><a href="#">Vision&nbsp;&&nbsp;Mission</a></li>
          <li><a href="#">Chairman&nbsp;Message</a></li>
          <li><a href="#">Dean&nbsp;Message</a></li>
          <li><a href="#">Principal&nbsp;Message</a></li>
          <li><a href="#">Industry&nbsp;Interface</a></li>
          <li><a href="#">Affiliation&nbsp;&&nbsp;Recognition </a></li>
          <li><a href="#">Governing&nbsp;Body</a></li>
          <li><a href="#">RISE</a></li>
        </ul>
      </div>
    </div>

<?php }

get_footer(); ?>
