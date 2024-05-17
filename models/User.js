import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {type: String,
        required: true
    },
    password: {
        type: String,
    },
    role:{
        type: String,
        enum: ['user', 'student', 'teacher'],
        default: 'user'
    }

})

export default mongoose.model('User', UserSchema)