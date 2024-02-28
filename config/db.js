
// load environment variables
if (process.env.NODE_ENV != "production"){
    require('dotenv').config()
}
const mongoose = require('mongoose')
async function db(){
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Database connected")
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = db;