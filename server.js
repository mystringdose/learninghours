// load environment variables
if (process.env.NODE_ENV != "production"){
    require('dotenv').config()
}

// import dependencies
const express = require('express')
const db = require('./config/db')
const Course = require('./models/course')

//create express app
const app = express()

//configure express app to handle json requests
app.use(express.json())
//connect to database
db()

//api routes
app.get("/", (req,res) =>{
    res.json({hello: "world"})
})
app.post("/courses", async (req, res) =>{
    const title = req.body.title 
    const description = req.body.description
    const hours_done = req.body.hours_done
    const total_hours = req.body.total_hours

    const course = await Course.create({title, description, hours_done, total_hours})

    res.json({course: course})
})

//route to get all courses
app.get("/courses", async (req, res) =>{
    const courses = await Course.find()
    res.json({courses: courses})
})

// route to get one course by id
app.get("/courses/:id", async (req, res) =>{
    const course = await Course.findById(req.params.id)
    res.json({course: course})
}) 

// route to update a course by id
app.put("/courses/:id", async (req, res) =>{

    // update course by id in the db
    await Course.findByIdAndUpdate(req.params.id, req.body)

    // fetch and store update course
    const course = await Course.findById(req.params.id)


    res.json({course: course})
})

// route to delete a course by id
app.delete("/courses/:id", async (req, res) =>{
    await Course.findByIdAndDelete(req.params.id)
    res.json({message: "Course deleted"})
})

//listening port
app.listen(process.env.PORT)