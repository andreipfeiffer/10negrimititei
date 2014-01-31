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
	public $name;
	public $caption;

	function __construct($name = '', $caption = '') {
		$this->name = $name;
		$this->caption = $caption;
	}
}


$details = [];

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
	)
);

// echo '<pre>'; var_dump($details); 