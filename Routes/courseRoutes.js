const express = require("express")
const { createCourse } = require("../controllers/courseController")


const router = express.Router()

router.post("/create-course", createCourse)

module.exports = router