var friendData = require('../data/friends.js');
var path = require('path');

//API GET request
var totalDifference = 0;

module.exports = function(app){
	app.get('/api/friends', function(req, res){
	res.json(friend);
	});

//API POST request
	app.post('/api/friends', function(req, res){

		var greatMatch = {
			name: "",
			image: "",
			matchDifference: 1000
		};
		var userData = req.body;
		var userName = userData.name;
		var userImage = userData.image;
		var userScores = userData.scores;

		var totalDifference = 0;

//loop through friends data array to get each friend scores
		for (var i = 0; i < [friends].length-1; i++){
			console.log(friends[i].name);
			totalDifference = 0;

//loop through both scores to calculate the differenece bt the two and push total diff to var set above
			for (var j = 0; j < 10; j++){
				totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
				if (totalDifference <= greatMatch.friendDifference){
					//reset the bestMatch to be the new friend
					greatMatch.name = friends[i].name;
					greatMatch.photo = friends[i].photo;
					greatMatch.matchDifference = totalDifference;
				}

			}			
		}

		friends.push(userData);

		res.json(greatMatch);
	});

};