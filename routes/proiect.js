var config = require('../config');

module.exports = function(app) {
	app.get('/proiect/:item', function(req, res) {
		res.render('proiect', { title: config.title });
	});
};

