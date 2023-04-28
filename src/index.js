const express = require ("express") 
const app = express()
const path = require("path")
const hbs = require("hbs") //for hbs files
const collection = require("./mongodb")


const tempelatePath = path.join(__dirname,'../templates') 



app.use(express.json()) //To get hbs files
app.set("view engine", "hbs") //Our view engine will be hbs
app.set("views",templatePath) //For the looks


app.get("/",(req,res)=>{     //Get for login this is the homepage
    res.render("login")


})

app.get("/signup",(req,res)=>{       //Get for signup
    res.render("signup")
    

})



app.post("/signup",async (req,res)=>{ //Working with async here


    const data={
        name:req.body.name,          //Grabbing information from signup hbs
        password:req.body.password
    }

    await collection.insertMany([data]) //fills collection 
    
    res.render("home")


})






app.listen(3000,()=>{         //For connection
 
    console.log("Connection made");
})


