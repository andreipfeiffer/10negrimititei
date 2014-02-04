
// Module dependencies
var express = require('express'),
	config  = require('./config'),
	routes  = require('./routes');

var app = module.exports = express();


// Configuration
app.configure(function() {
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.set('view options', { layout: false });
	// render templates with identation
	app.locals.pretty = true;
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));
});

app.configure('development', function() {
	app.use( express.errorHandler({ dumpExceptions: true, showStack: true }) );
});

app.configure('production', function() {
	app.use( express.errorHandler() );
});


// Routes
app.get('/', routes.index);


// App launch
app.listen(config.port);