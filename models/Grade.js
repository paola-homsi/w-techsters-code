import mongoose from "mongoose";

const GradeSchema = new mongoose.Schema({
    grade: {type: Number,
        required: true,
    },
    instructorId: { type: String},
    student: {
        type: mongoose.Types.ObjectId,
        ref: 'Student',
        required: true
      },
    course: {
        type: mongoose.Schema.ObjectId,
        ref: 'Course',
        required: true
    },
    comments: {
        type: String,
        default: ''
      }
},
{
    timestamps: true
  })

export default mongoose.model("Grade", GradeSchema)

