var expressInstance = require('express');
var application     = expressInstance();
var config          = require('./config.json');

application.set('view engine', 'ejs');

application.get('/', function(request, response) {
	response.render('pages/index');
});

var bodyParser = require('body-parser');
application.use(bodyParser.urlencoded({
  extended: true
}));

application.post('/', function(request, response) {
	console.log("hello");
	console.log(request.body.txt_name);
	console.log(request.body.txt_password);
});

application.listen(config.port, function() {
	console.log("server is running on port " + config.port);
}); 