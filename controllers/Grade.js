import asyncHandler from '../middleware/async';
import { Grade } from '../models/Grade';  
import { Student } from '../models/Student';  
import { Course } from '../models/Course'; 
import redis from 'redis'; 

const  client = redis.createClient();


export const createGrade = asyncHandler(async (req, res ) => {
  try {
    const { studentId, courseId, grade } = req.body;

   
    const student = await Student.findById({_id:studentId});
    const course = await Course.findById({_id:courseId});

    if (!student || !course) {
      return res.status(404).json({ message: 'Student or Course not found' });
    }

    const newGrade = new Grade({ student: studentId, course: courseId, grade });
    await newGrade.save();

    res.status(201).json({ message: 'Grade created successfully', grade: newGrade });
  } catch (error) {
    next(error);
  }
});

// Get all grades
export const getAllGrades = asyncHandler(async (req, res) => {
  try {
    client.get('grades', async(err, data) => {
        if(err) throw err;

        if(data) {
            res.json(JSON.parse(data));
        } else {
            const grades = await Grade.find().populate('student course', 'name'); 
           
            client.SETEX('grades', 3600, JSON.stringify(grades));

            res.status(200).json(grades); 
        }
    });
   
  } catch (error) {
    next(error);
  }
});

// Get grades by student ID
export const getGradesByStudentId = asyncHandler(async (req, res) => {
  try {
    const { studentId } = req.params;
    const grades = await Grade.find({ student: studentId }).populate('course', 'name');
    
    if (!grades.length) {
      return res.status(404).json({ message: 'Grades not found for this student' });
    }

    res.status(200).json(grades);
  } catch (error) {
    next(error);
  }
});

// Update a grade
export const updateGrade = asyncHandler(async (req, res ) => {
  try {
    const { gradeId } = req.params;
    const { grade } = req.body;

    const updatedGrade = await Grade.findByIdAndUpdate(gradeId, { grade }, { new: true });

    if (!updatedGrade) {
      return res.status(404).json({ message: 'Grade not found' });
    }

    res.status(200).json({ message: 'Grade updated successfully', grade: updatedGrade });
  } catch (error) {
    next(error);
  }
});

// Delete a grade
export const deleteGrade = asyncHandler(async (req, res) => {
  try {
    const { gradeId } = req.params;

    const deletedGrade = await Grade.findByIdAndDelete(gradeId);

    if (!deletedGrade) {
      return res.status(404).json({ message: 'Grade not found' });
    }

    res.status(200).json({ message: 'Grade deleted successfully' });
  } catch (error) {
    next(error);
  }
});
