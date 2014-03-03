module.exports  = function(app) {
	var config  = require('../config'),
		details = require('../details');

	var capitaliseFirstLetter = function(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	app.get('/proiect/:item', function(req, res) {
		var item = req.params.item;

		if ( item in details ) {
			res.render('proiect', {
				pageTitle: capitaliseFirstLetter(item) + ' - ' + config.title,
				name: capitaliseFirstLetter(item),
				details: details[item],
				pages: details
			});
		} else {
			res.render('404');
		}
	});
};

