module.exports = function(app) {
	var config = require('../config'),
		details = {
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

	var capitaliseFirstLetter = function(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	app.get('/proiect/:item', function(req, res) {
		var item = req.params.item;

		if ( item in details ) {
			res.render('proiect', {
				pageTitle: capitaliseFirstLetter(item) + ' - ' + config.title,
				name: capitaliseFirstLetter(item),
				details: details[item]
			});
		} else {
			res.render('404');
		}
	});


	// temporary persistence

	/**
	 *  Uno
	 */
	details['uno'] = {

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
				'description': 'lorem ipsum, descriere de la primirea mititelului'
			},
			{
				'name': 'al doilea primitor',
				'description': 'a doua descriere de la cel de al doilea primitor a unui mititel'
			}
		]
	};

};

