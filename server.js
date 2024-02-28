// load environment variables
if (process.env.NODE_ENV != "production"){
    require('dotenv').config()
}

// import dependencies
const express = require('express')
const db = require('./config/db')
const courseController = require('./controllers/courseController')
const cors = require('cors')

//create express app
const app = express()

//configure express app to handle json requests, cors
app.use(express.json())
app.use(cors())
//connect to database
db()

//api routes
app.post("/courses", courseController.createCourses)
//route to get all courses
app.get("/courses", courseController.fetchCourses)
// route to get one course by id
app.get("/courses/:id",courseController.fetchCourse ) 
// route to update a course by id
app.put("/courses/:id", courseController.updateCourse)
// route to delete a course by id
app.delete("/courses/:id", courseController.deleteCourse)

//listening port
app.listen(process.env.PORT)