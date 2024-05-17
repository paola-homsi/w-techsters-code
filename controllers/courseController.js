//import Course from ("../models/courseModel.js");

const courseModel = require("../Models/courseModel");
const Instructor = require("../controllers/instructorController");


const createCourse = async (req, res) => {
    const {
        Agent,
        username,
        title,
        description,
        level,
        duration,
        prerequisites,
        topics,
        students,

    } = req.body

    const details = [
        "Agent",
        "username",
        "title",
        "description",
        "level",
        "duration",
        "prerequisites",
        "topics",
        "students",
    ];

    for (const detail of details) {
        if (!req.body[detail]) {
            return res.status(400).json({ msg: `${detail} is required` });
        }
    }
    try {

        let instructor = await Instructor.findOne({ instructorId: Agent });

        // console.log("this is instructor", instructor)
        console.log("the problem is not here here");

        if (!instructor) {
            console.log("the problemis instructor");
            instructor = await Instructor.create({
                instructorId: Agent,
                username,
            });
            console.log("the problem is not instructor");
        } else {
            await instructor.save();
        }

        const course = await courseModel.create({
            title,
            category,
            level,
            description,
            duration,
            prerequisites,
            topics,
            students,
            Agent: instructor._id,
        });

        await Instructor.findByIdAndUpdate(instructor._id, {
            $push: { created_courses: course._id },
        });

        res.status(201).json({ message: "Course created successfully", course });

    } catch (error) {
        console.error("Error creating course:", error);
        res.status(500).json({ error: "Internal server error", error });
    }
}

const getCourseById = async (req, res) => {

}

module.exports = { createCourse, getCourseById }
