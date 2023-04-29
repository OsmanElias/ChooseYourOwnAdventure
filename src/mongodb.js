const mongoose = require("mongoose")

const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

mongoose.connect("mongodb://127.0.0.1:27017/ChooseAdventure", connectionOptions)

const db = mongoose.connection

db.on("error", console.error.bind(console, "Error connecting to MongoDB:"))
db.once("open", () => {
  console.log("Connected to MongoDB!")
})

const LogInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

const collection = mongoose.model("CollectionOne", LogInSchema)

module.exports = collection
