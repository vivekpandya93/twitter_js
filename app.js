var express = require('express');
var app = express(); // creates an instance of an express application

var port = 3000;

app.listen(port, function() {
	console.log('server listening on port', port);
});

app.get('/', function(request, response) {
	console.log('Status Code',response.statusCode);
	response.send('WELCOME!');
});

app.use(function(request, response, next) {
	console.log(request.method, '/', response.statusCode);
	console.log(request.path);
});