const mongoose = require('mongoose')
const {model,Schema} = mongoose;
const userSchema = Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        lowercase:true
    },
    phone:Number
})

module.exports = model("User",userSchema)