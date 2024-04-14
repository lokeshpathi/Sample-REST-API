require('dotenv').config()
const express = require("express")
const app =express()
const mongoose = require("mongoose")

mongoose.connect(process.env.DB_url)
app.use(express.json())
const UserRoutes = require('./routes/users.js')
app.use("/users",UserRoutes)

app.listen(3000,()=>{
    console.log("Server has started")
})