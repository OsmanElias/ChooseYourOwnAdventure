const mongoose = require ("mongoose")

mongoose.connect("mongodb://localhost:27017/ChooseAdventure")
.then(()=>{
    console.log("Connected to database!");
})
.catch(()=>{
    console.log("Error no connection");
})


const LogInSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const collection = new mongoose.model("CollectionOne",LogInSchema)


module.exports = collection