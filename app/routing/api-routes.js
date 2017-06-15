// Routes linked to data source
var friends = require('../data/friends.js');

module.exports = function (app) {
//api path for friend data
  app.get('/api/friends', function (req,res) {
      res.json(friends);
  });

// Updates the friend database
  app.post('/api/friends', function (req, res) {
      var newFriend = req.body;
// computes scores
      var bestMatch = {};

      for(var i = 0; i < newFriend.scores.length; i++) {
        if(newFriend.scores[i] == "1 (Disagree Strongly)") {
          newFriend.scores[i] = 1;
        } else if(newFriend.scores[i] == "5 (Agree Strongly)") {
          newFriend.scores[i] = 5;
        } else {
          newFriend.scores[i] = parseInt(newFriend.scores[i]);
        }
      }
// compares scores of newFriend with others in database

      var bestMatchIndex = 0;

      var bestMatchDifference = 40;

      for(var i = 0; i < friends.length; i++) {
        var totalDifference = 0;

        for(var index = 0; index < friends[i].scores.length; index++) {
          var differenceOneScore = Math.abs(friends[i].scores[index] - newFriend.scores[index]);
          totalDifference += differenceOneScore;
        }

        if (totalDifference < bestMatchDifference) {
          bestMatchIndex = i;
          bestMatchDifference = totalDifference;
        }
      }

      bestMatch = friends[bestMatchIndex];

      // Puts newFriend databsae
      friends.push(newFriend);

      // return bestMatch friend
      res.json(bestMatch);
  });

};