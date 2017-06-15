//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//data for database
var friends = require('./app/data/friends.js');

// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server 

var app = express(); 
var PORT = process.env.PORT || 3030; 

//make the style.css work
app.use(express.static('app/public'));
app.use(express.static('app/public/assets'));
app.use(express.static('app'));

// BodyParser makes it easy for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// ROUTER
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

// LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});