const mongoose = require("mongoose")

const User = new mongoose.Schema({
    name : {type : String,required:true},
    score : {type : Number,required:true}
    },
    {collection:"user_data"}
)

const model = mongoose.model("UserData",User)
module.exports = model