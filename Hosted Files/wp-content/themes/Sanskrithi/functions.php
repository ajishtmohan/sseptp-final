<?php

  function sanskrithi_files() {
    wp_enqueue_script('sanskrithi_scripts', get_theme_file_uri('/assets/js/app.js'), NULL, '1.0', true);
    wp_enqueue_style( 'google-fonts', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Roboto+Slab:wght@100;200;300;400&display=swap', [], null );
    wp_enqueue_style('sanskrithi_main_styles', get_theme_file_uri('/assets/css/styles.css'));
  }

  add_action('wp_enqueue_scripts', 'sanskrithi_files');

  function sanskrithi_features() {
    add_theme_support('title-tag');
    add_theme_support('menus');
  }

  add_action('after_setup_theme', 'sanskrithi_features');

?>