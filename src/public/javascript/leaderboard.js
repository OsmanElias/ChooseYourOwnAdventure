/**
 * Osman Elias
 * Section 8
 * 
 * 
 * This file is used to setup a leaderboard using the mongoDB schema, currently still not working!
 */





const quizScoreCollection = require("./mongodb").QuizScore;

const score = 10;
const loggedInUser = req.params.name; // retrieve user name from parameter

quizScoreCollection.create({
  name: loggedInUser,
  score: score
}).then(score => {
  console.log("Score added to leaderboard:", score)
}).catch(error => {
  console.error("Error adding score to leaderboard:", error)
})


QuizScore.find()
  .sort({ score: -1 })
  .limit(10)
  .then((scores) => {
    console.log(scores);
  })
  .catch((err) => {
    console.error("Error getting scores", err);
  });