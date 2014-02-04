<?php

/**
 *  Image Class, for the details of a "mititel"
 *
 *  @param {String} name     image filename
 *  @param {String} caption  image caption text
 *  @example $imageObj = new Img('filename', 'caption text');
 */
class Img
{
	function __construct($name = '', $caption = '') {
		$this->name = $name;
		$this->caption = $caption;
	}
}

/**
 *  Image Class, for the details of a "mititel"
 *
 *  @param {String} name     image filename
 *  @param {String} caption  image caption text
 *  @example $imageObj = new Img('filename', 'caption text');
 */
class Story
{
	function __construct($options) {
		$this->name = $options['name'];
		$this->description = $options['description'];
		// $this->link = $options['link'];
	}
}


/**
 *  Content Data Array
 *  Contains all the information for the details pages (replaces a database persistence)
 */
$details = [];


/**
 *  Uno
 */
$details['uno'] = array(
	// texts
	'textIntro' => 'Dupa uno, vine Doina',
	'textDescription' => 'Long description, dolor sit amet. Long description, dolor sit amet. Long description, dolor sit amet. Long description, dolor sit amet. Long description, dolor sit amet.',

	// images
	'imagesFolder' => '01uno',
	'images' => array(
		new Img(
			'uno1.jpg',
			'Lorem ipsum, dolor sit 1'
		),
		new Img(
			'uno2.jpg',
			'Lorem ipsum, dolor sit 2'
		),
		new Img(
			'uno3.jpg',
			'Lorem ipsum, dolor sit 3'
		),
		new Img(
			'uno4.jpg',
			'Lorem ipsum, dolor sit 4'
		),
		new Img(
			'uno5.jpg',
			'Lorem ipsum, dolor sit 5'
		),
		new Img(
			'uno6.jpg',
			'Lorem ipsum, dolor sit 6'
		)
	),

	// stories
	'stories' => array(
		new Story([
			'name' => 'nume primitor',
			'description' => 'lorem ipsum, descriere de la primirea mititelului'
		]),
		new Story([
			'name' => 'al doilea primitor',
			'description' => 'a doua descriere de la cel de al doilea primitor a unui mititel'
		])
	)
);


/**
 *  Doina
 */
// $details['doina'] = array();


/**
 *  Trica
 */
// $details['trica'] = array();


/**
 *  Quad
 */
// $details['quad'] = array();


/**
 *  Cincu
 */
// $details['cincu'] = array();


/**
 *  Schatzi
 */
// $details['schatzi'] = array();


/**
 *  Septimiu
 */
// $details['septimiu'] = array();


/**
 *  Octi
 */
// $details['octi'] = array();


/**
 *  Novo
 */
// $details['novo'] = array();


/**
 *  Deca
 */
// $details['deca'] = array();

// echo '<pre>'; var_dump($details);
