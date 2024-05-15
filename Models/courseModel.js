//import mongoose from "mongoose";
const mongoose = require("mongoose")
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: true
  },
  duration: {
    type: Number,
    required: true // Duration in hours
  },

  prerequisites: {
    type: [String],
    default: []
  },
  topics: {
    type: [String],
    required: true
  },

  students: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Student'
  },
  Agent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Instructors",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },


  //createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Course", courseSchema);
