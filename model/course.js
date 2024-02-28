const { default: mongoose } = require("mongoose");

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    hours_done: Number,
    total_hours: Number,
})

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;