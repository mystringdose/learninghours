// load environment variables
if (process.env.NODE_ENV != "production"){
    require('dotenv').config()
}

// import dependencies
const express = require('express')
const db = require('./config/db')

//create express app
const app = express()

//connect to database
db()

//api routes
app.get("/", (req,res) =>{
    res.json({hello: "world"})
})

//listening port
app.listen(process.env.PORT)