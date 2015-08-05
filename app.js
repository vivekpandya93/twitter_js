var swig = require('swig');
swig.setDefaults({cache: false});

var express = require('express');
var app = express(); // creates an instance of an express application

var port = 3000;

app.listen(port, function() {
	console.log('server listening on port', port);
});

// app.get('/', function(request, response) {
// 	console.log('Status Code',response.statusCode);
// 	response.send('WELCOME!');
// });

app.use('/sdgd', function(request, response, next) {
	console.log(request.method, '/', response.statusCode);
	console.log(request.path);
});

var data = {
	title: "An Example",
	people: [{name:'Gandalf'}, {name:'Frodo'}, {name:'Hermione'}],

};



// swig.renderFile(__dirname + '/views/index.html', data, function(err, output) {
// 	if (err) throw err;
// 	console.log(output);
// });

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname+'/views');

var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.get('/index', function(request, response) {
	response.render('index', data, function(err, html) {
		response.send(html);
	});
});





