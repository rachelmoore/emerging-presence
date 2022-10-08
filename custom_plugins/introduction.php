<?php
/*
Plugin Name: Introduction
Description: Introduction custom post type and taxonomy for Emerging Presence
Version: 0.1
Author: Rachel Moore
Text Domain: introduction
Domain Path: /languages
License: GPLv2
*/

// to check WP is running
defined( 'ABSPATH' ) or die( "Permission denied!" );

// Register custom post type 'record'
function introduction_create_cpt() {
    // define labels
	$labels = array (
		'name' 			=> __( 'Introduction','post type general name', 'introduction' ),
		'singular_name' 	=> __( 'Introduction', 'post type singular name', 'introduction' ),
		'name_admin_bar'	=> __( 'Introduction', 'introduction' ),
		'add_new' 		=> __( 'Add Introduction', 'introduction' ),
		'add_new_item' 		=> __( 'Add Introduction', 'introduction' ),
		'edit_item' 		=> __( 'Edit Introduction', 'introduction' ),
		'new_item' 		=> __( 'New Introduction', 'introduction' ),
		'view_item' 		=> __( 'View Introduction', 'introduction' )
	);

	// define args
	$args = array (
		'labels' 		=> $labels,
    		'description'		=> 'Holds introduction info',
		'public' 		=> true,
		'show_in_nav_menus' 	=> true,
		'menu_icon' 		=> 'dashicons-index-card',
		'supports' 		=> array( 'title', 'editor', 'page-attributes', 'thumbnail' ),
		'show_in_rest' 		=> true,
		//'taxonomies'		=> array( 'category' )
	);

	register_post_type( 'introduction', $args );

}
add_action( 'init', 'introduction_create_cpt' );


// Register custom taxonomy for 'record'
function introduction_create_taxonomies() {

    //define labels
    $labels = array(
         'name' 			=> __( 'Introduction Categories', 'taxonomy general name', 'introduction' ),
         'singular_name' 		=> __( 'Category', 'taxonomy singular name', 'introduction' ),
         'search_items' 		=> __( 'Search Categories', 'introduction' ),
         'all_items' 			=> __( 'All Categories', 'introduction' ),
         'edit_item'  			=> __( 'Edit Category', 'introduction' ),
         'update_item' 			=> __( 'Update Category', 'introduction' ),
         'add_new_item' 		=> __( 'Add New Category', 'introduction' ),
         'new_item_name' 		=> __( 'New Category', 'introduction' ),
         'popular_items' 		=> __( 'Popular Categories', 'introduction' ),
         'menu_name' 			=> __( 'Record Categories', 'introduction' ),
         'choose_from_most_used'	=> __( 'Choose from the most used Categories', 'introduction' ),
         'not_found' 			=> __( 'No Categories found', 'introduction' )
    );

    // define args
    $args = array(
         'hierarchical' 	=> false,
         'labels' 		=> $labels,
         'rewrite' 		=> true,
         'show_admin_column'	=> true,
         'show_in_rest' 	=> true,
   );

   // assign the category "record" only for "record" Post Type
   register_taxonomy( 'introduction_cat', 'introduction', $args );

}
add_action( 'init', 'introduction_create_taxonomies', 0 );


// Create shortcode [records_list] and display posts from 'record' CPT
function introduction_list( $atts ){

    // create the query arguments array ($args) to pass to WP_Query
	$args = array(
		'post_type' 		=> 'introduction',
		'posts_per_page'	=> '1'
    );

    // get the posts and store array of records in $records
    $introduction = new WP_Query( $args );

    if ( $introduction->have_posts() ) {

        $html = '';
        while ( $introduction->have_posts() ) {
            $introduction->the_post();
            $id = get_the_ID();
            $title = get_the_title();
            $introduction_title = get_field('introduction_title');
            $introduction_paragraph_1 = get_field('introduction_paragraph_1');
            $introduction_paragraph_2 = get_field('introduction_paragraph_2');
            $thumbnail = get_the_post_thumbnail($id, array(180, 180));
            $link = get_the_permalink();
            $html .= '<div style="display:flex">';
            $html .= '<div style="padding-right:20px">';
            $html .= '<a href="' . $link . '">' . $thumbnail . '</a>';
            $html .= '</div>';
            $html .= '<div>';
            $html .= '<strong><p style="font-size:1.2em"><a href="' . $link . '">' . $title . '</a></p></strong>';
            $html .= '<strong>Introduction Title:</strong> ' . $introduction_title . '<br>';
            $html .= '<strong>Introduction Paragraph 1:</strong> ' . $introduction_paragraph_1;
            $html .= '<strong>Introduction Paragraph 1:</strong> ' . $introduction_paragraph_2;
            $html .= '</div>';
            $html .= '</div>';
        }
        return $html;
    } else {
        return "Nothing found!";
    }
	
	wp_reset_postdata();

}

// add custom fields to REST API
function introduction_rest_prepare( $data, $post, $request ) {
	$_data = $data->data;
    $_data['introduction_title'] = get_field('introduction_title', $post->ID);
    $_data['introduction_paragraph_1'] = get_field('introduction_paragraph_1', $post->ID);
    $_data['introduction_paragraph_2'] = get_field('introduction_paragraph_2', $post->ID);
	$data->data = $_data;
	return $data;
}
add_filter( 'rest_prepare_introduction', 'introduction_rest_prepare', 10, 3 );
