import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const db = async () => {
    try {
        // await mongoose.connect("mongodb://localhost:27017/remsana");
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("Mongodb database connected sucessfully");
    } catch (error) {
        console.log("error connecting to Mongodb server", error.message);
    }
};

export { db };
