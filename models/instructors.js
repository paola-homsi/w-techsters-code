const mongoose = require("mongoose");

const instructorSchema = new Schema({
    instructorName: String,
    instructorId: SVGAnimatedInteger, 
    courseName: String,
    description: String,
});

module.exports = mongoose.model('Instructors', instructorSchema)