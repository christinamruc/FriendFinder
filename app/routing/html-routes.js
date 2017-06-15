//Includes path package
var path = require('path');
// Routing
module.exports = function(app) {
// Basic route for home page
  app.get('/', function (req, res) {
      res.sendFile(path.join(__dirname, '/../public/home.html'));
  });
//route to display the survey page
  app.get('/survey', function (req, res) {
      res.sendFile(path.join(__dirname, '/../public/survey.html'));
  });

// Defaults to home if no route found
  app.use(function (req, res) {
      res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
};