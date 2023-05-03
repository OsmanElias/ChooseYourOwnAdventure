/**
 * Osman Elias 
 * Section 8
 * 
 * CD into repo, run src/index.js to get the program running
 * Go into browser and connect to localhost:3000
 * 
 * This file contains all the routing as well as require files to get this node app to run and work, this is basically the driver file.
 */


const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs"); //for hbs files
const collection = require("./public/javascript/mongodb");
const crypto = require("crypto");
const tempelatePath = path.join(__dirname, "./templates");
const session = require("express-session"); 

app.use(express.json()); //To get hbs files
app.set("view engine", "hbs"); //Our view engine will be hbs
app.set("views", tempelatePath); //For the looks
app.use(express.urlencoded({ extended: false })); //to get the code to run
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files
const sessionSecret = crypto.randomBytes(16).toString("hex"); //used the crypto.randomBytes() method to generate a random sequence of bytes     


app.use(session({ //creating a session for login
  secret: sessionSecret,
  resave: false,
  saveUninitialized: true
}));

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/quiz", (req, res) => { //Added if else so user cant just go into the quizzes without login!
  if (!req.session.user) {
    res.redirect("/");
    return;
  }
  res.render("quiz");
});

app.get("/quizTwo", (req, res) => {
  if (!req.session.user) {
    res.redirect("/");
    return;
  }
  res.render("quizTwo");
});

app.get("/quizThree", (req, res) => {
  if (!req.session.user) {
    res.redirect("/");
    return;
  }
  res.render("quizThree");
});

app.get("/quizFour", (req, res) => {
  if (!req.session.user) {
    res.redirect("/");
    return;
  }
  res.render("quizFour");
});

app.get("/quizFive", (req, res) => {
  if (!req.session.user) {
    res.redirect("/");
    return;
  }
  res.render("quizFive");
});

app.get("/quizSix", (req, res) => {
  if (!req.session.user) {
    res.redirect("/");
    return;
  }
  res.render("quizSix");
});

app.get("/home", (req, res) => {
  if (!req.session.user) {
    res.redirect("/");
    return;
  }
  res.render("home");
});


app.get("/leaderboard", async (req, res) => {
  try {
    const scores = await collection.QuizScore.find().sort({ score: -1 }).limit(10); //get top 10 scores
    res.render("leaderboard", { scores });
  } catch (error) {
    console.error("Error getting leaderboard data:", error);
    res.status(500).send("Error getting leaderboard data");
  }
});

app.post("/signup", async (req, res) => {
  const data = {
    name: req.body.name,
    password: req.body.password,
  };

  try {
    await collection.LogIn.collection.insertOne(data);
    res.render("login");
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).send("Error inserting data");
  }
});

app.post("/login", async (req, res) => {
  try {
    const check = await collection.LogIn.findOne({ name: req.body.name }); //checking if user exists

    if (check.password === req.body.password) {
      req.session.user = req.body.name;
      res.render("home");
    } else {
      res.send("Password is incorrect");
    }
  } catch {
    res.send("No Account found");
  }
});

app.post("/quiz", async (req, res) => {
  const data = {
    name: req.session.user,
    score: req.body.score,
  };

  try {
    await collection.QuizScore.create(data); //add score to leaderboard
    res.redirect(`/leaderboard/${req.session.user}`); //redirect to leaderboard
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).send("Error inserting data");
  }
});




app.listen(3000, () => {
  console.log("Connection made");
});

