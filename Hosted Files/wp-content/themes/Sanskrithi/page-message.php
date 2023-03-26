<?php
/*
Template Name: Message
*/
?>

<?php get_header(); ?>

<?php 
  while(have_posts()) {
    the_post(); ?>

    <?php 
    $personImage = get_theme_file_uri('/assets/img/'); echo single_post_title();
    ?>
      
      <div class="message-page">
      <div class="message-page__topband">
        <div class="message-page-top-band__header">
          <div class="message-page-top-band__header--title">
            <h1><?php the_title() ?></h1>
          </div>
        </div>
      </div>
    </div>

    <div class="message-page-content">
        
        <?php the_content(); ?>
        
      </div>


      <div class="message-page-content__sidebar">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/about-us/our-heritage/">Our&nbsp;Heritage </a></li>
          <li><a href="/about-us/vision-and-vision/">Vision&nbsp;&&nbsp;Mission</a></li>
          <li><a href="/about-us/chairman-message/">Chairman&nbsp;Message</a></li>
          <li><a href="/about-us/dean-message/">Dean&nbsp;Message</a></li>
          <li><a href="/about-us/principal-message/">Principal&nbsp;Message</a></li>
          <li><a href="/about-us/secretary-message/">Secretary&nbsp;Message</a></li>
          <li><a href="/about-us/industry-interface/">Industry&nbsp;Interface</a></li>
          <li><a href="/about-us/affiliation-and-recognition/">Affiliation&nbsp;&&nbsp;Recognition </a></li>
          <li><a href="/about-us/governing-body/">Governing&nbsp;Body</a></li>
        </ul>
      </div>
    </div>


<?php }

get_footer(); ?>
