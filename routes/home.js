module.exports = function(app) {
	var config  = require('../config'),
		details = require('../details');

	app.redirect('/', '/proiect');
	app.get('/proiect', function(req, res) {
		res.render('index', {
			pageTitle: config.title,
			pages: details
		});
	});
};

