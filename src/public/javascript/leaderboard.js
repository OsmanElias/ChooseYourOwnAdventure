const quizScoreCollection = require("./mongodb").QuizScore;

// Get the name and score from the user input or from the quiz script
const score = 10;

// Get the name of the logged in user from the session
const loggedInUser = req.session.user;

// Create a new document in the quizScoreCollection collection
quizScoreCollection.create({
  name: loggedInUser,
  score: score
}).then(score => {
  console.log("Score added to leaderboard:", score)
}).catch(error => {
  console.error("Error adding score to leaderboard:", error)
})