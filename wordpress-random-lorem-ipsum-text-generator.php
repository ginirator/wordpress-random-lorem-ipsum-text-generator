<?php
/*
Plugin Name: WordPress Random Lorem Ipsum Text Generator
 * Plugin URI: https://github.com/ginirator/wordpress-random-lorem-ipsum-text-generator
 * Description: This is a WordPress Plugin that generates random passwords.
 * Version: 1.0.0
 * Author: Valeriu Dodon
 * Author URI: https://ginirator.com/
 * License:  GPLv2 or later
 * Text Domain: wordpress-random-lorem-ipsum-text-generator
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin directory for easy access
if (!defined('WP_LOREM_PLUGIN_DIR')) {
    define('WP_LOREM_PLUGIN_DIR', plugin_dir_path(__FILE__));
}

// Enqueue scripts and styles
function wp_lorem_enqueue_scripts() {
    wp_enqueue_style('wp-lorem-style', plugins_url( '/assets/css/style.css', __FILE__ ), [], '1.0.1');
    wp_enqueue_script('wp-lorem-script', plugins_url('/assets/js/script.js', __FILE__), array('jquery'), '1.0.1', true);
}
add_action('wp_enqueue_scripts', 'wp_lorem_enqueue_scripts');

// Load generator
require_once(WP_LOREM_PLUGIN_DIR . '/includes/lorem_generator.php');
