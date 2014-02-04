var config = require('../config');

module.exports = function(app) {
	app.redirect('/', '/proiect');
	app.get('/proiect', function(req, res) {
		res.render('index', { title: config.title });
	});
};

