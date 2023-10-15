const express = require("express");
const app = express()
const cors  = require("cors")
const mongoose = require("mongoose")
const User = require("./models/user.models");
const uri = 'mongodb+srv://divyam7379:nWkCM7fHe422RdAc@cluster0.yxsv10r.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp'
app.use(cors())
app.use(express.json()) 

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.post("/api/saveScore", async (req,resp)=>{
    try{
        const {name,score} = req.body
        const user = await User.create({name,score})
        resp.json({status:"ok",user:"ok"})
        console.log(user)
    }
    catch(err){
        console.log(err)
        resp.json({status:"error",error:{err}})
    }
    
})
app.get("/api/leaderboard", async (req,resp)=>{
    try{
        const users = await User.find().sort({score:-1}).limit(10)
        resp.json({status:"ok",users})
    }
    catch(err){
        console.log(err)
        resp.json({status:"error",error:{err}})
    }
  }    
)



app.listen(4000 , ()=>{
    console.log(`running on port ${4000}`)
})