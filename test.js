var swig = require('swig');

//var title = "An Example";
var data = {
	title: "An Example",
	people: [{name:'Gandalf'}, {name:'Frodo'}, {name:'Hermione'}],

};

swig.renderFile(__dirname + '/views/index.html', data, function(err, output) {
	if (err) throw err;
	console.log(output);
});

