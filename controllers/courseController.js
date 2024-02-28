const Course = require('../models/course')

const createCourses = async (req, res) =>{
    const title = req.body.title 
    const description = req.body.description
    const hours_done = req.body.hours_done
    const total_hours = req.body.total_hours

    const course = await Course.create({title, description, hours_done, total_hours})

    res.json({course: course})
}

const fetchCourses = async (req, res) =>{
    const courses = await Course.find()
    res.json({courses: courses})
}

const fetchCourse = async (req, res) =>{
    const course = await Course.findById(req.params.id)
    res.json({course: course})
}

const updateCourse = async (req, res) =>{

    // update course by id in the db
    await Course.findByIdAndUpdate(req.params.id, req.body)

    // fetch and store update course
    const course = await Course.findById(req.params.id)


    res.json({course: course})
}

const deleteCourse = async (req, res) =>{
    await Course.findByIdAndDelete(req.params.id)
    res.json({message: "Course deleted"})
}

module.exports = {createCourses, fetchCourses, fetchCourse, updateCourse, deleteCourse}
