/**
 * Osman Elias
 * Section 8
 * 
 * 
 * This file is used to setup a connection to mongo as well as start an express session to log the users.
 */


const mongoose = require("mongoose");
const express = require("express");

const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect("mongodb://127.0.0.1:27017/ChooseAdventure", connectionOptions);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB:"));
db.once("open", () => {
  console.log("Connected to MongoDB!");
});

const LogInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const QuizScoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

const LogIn = mongoose.model("LogIn", LogInSchema);
const QuizScore = mongoose.model("QuizScore", QuizScoreSchema);

const app = express();

app.get("/api/scores", (req, res) => {
  QuizScore.find()
    .sort({ score: -1 })
    .limit(10)
    .then((scores) => {
      res.json(scores);
    })
    .catch((err) => {
      res.status(500).json({ error: "Error getting scores" });
      console.error("Error getting scores", err);
    });
});

module.exports = {
  LogIn: LogIn,
  QuizScore: QuizScore,
};