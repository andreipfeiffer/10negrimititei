// temporary persistence
var data = {
	'uno': {},
	// 'doina': {},
	// 'trica': {},
	// 'quad': {},
	// 'cincu': {},
	// 'schatzi': {},
	// 'septimiu': {},
	// 'octi': {},
	// 'novo': {},
	// 'deca': {},
};


/**
 *  UNO
 */
data['uno'] = {

	// texts
	'textIntro': 'Dupa uno, vine Doina',
	'textDescription': 'Long description, dolor sit amet. Long description, dolor sit amet. Long description, dolor sit amet. Long description, dolor sit amet. Long description, dolor sit amet.',

	// images
	'imagesFolder': '01uno',
	'images': [
		{
			'filename': 'uno1.jpg',
			'caption': 'Lorem ipsum, dolor sit 1'
		},
		{
			'filename': 'uno2.jpg',
			'caption': 'Lorem ipsum, dolor sit 2'
		},
		{
			'filename': 'uno3.jpg',
			'caption': 'Lorem ipsum, dolor sit 3'
		},
		{
			'filename': 'uno4.jpg',
			'caption': 'Lorem ipsum, dolor sit 4'
		},
		{
			'filename': 'uno5.jpg',
			'caption': 'Lorem ipsum, dolor sit 5'
		},
		{
			'filename': 'uno6.jpg',
			'caption': 'Lorem ipsum, dolor sit 6'
		}
	],

	// stories
	'stories': [
		{
			'name': 'nume primitor',
			'date': '2013-01-08',
			'description': 'lorem ipsum, descriere de la primirea mititelului'
		},
		{
			'name': 'al doilea primitor',
			'date': '2012-12-25',
			'description': 'a doua descriere de la cel de al doilea primitor a unui mititel'
		}
	]
};

/**
 *  DOINA
 */
data['doina'] = {

	// texts
	'textIntro': 'Doina e a doua, si urmeaza ... cine?',
	'textDescription': 'Long description, dolor sit amet. Long description, dolor sit amet. Long description, dolor sit amet. Long description, dolor sit amet. Long description, dolor sit amet.',

	// images
	'imagesFolder': '01doina',
	'images': [],

	// stories
	'stories': [
		{
			'name': 'nume primitor',
			'date': '2013-01-08',
			'description': 'lorem ipsum, descriere de la primirea mititelului'
		}
	]
};

module.exports = data;