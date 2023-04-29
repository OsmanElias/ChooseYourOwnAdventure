const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs"); //for hbs files
const collection = require("./mongodb");

const tempelatePath = path.join(__dirname, "./templates");

app.use(express.json()); //To get hbs files
app.set("view engine", "hbs"); //Our view engine will be hbs
app.set("views", tempelatePath); //For the looks
app.use(express.urlencoded({ extended: false })); //to get the code to run
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

app.get("/", (req, res) => {
    res.render("login");
  });
  
app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res) => {
  const data = {
    name: req.body.name,
    password: req.body.password,
  };

  try {
    await collection.create(data);
    res.render("home");
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).send("Error inserting data");
  }
});

app.post("/login", async (req, res) => {
  try {
    const check = await collection.findOne({ name: req.body.name }); //checking if user exists

    if (check.password === req.body.password) {
      res.render("home");
    } else {
      res.send("Password is incorrect");
    }
  } catch {
    res.send("Error");
  }
});

app.listen(3000, () => {
  console.log("Connection made");
});
