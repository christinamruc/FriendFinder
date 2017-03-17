//dependencies
var path = require('path');

//routes
module.exports = function(app) {
	//get request
	app.get('/survey', function(req, res){
		res.sendFile(path.join(_dirname + '/../public/survey.html'));
	});
	//or default to home
	app.use(function(req,res){
		res.sendFile(path.join(_dirname + '/../public/home.html'));
	});
}