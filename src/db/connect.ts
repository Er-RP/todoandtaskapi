import mongoose from "mongoose";

export const connectDB = async (url : string) => {
    try {
        await mongoose.connect(url);
        return console.log("Connected to database");
    } catch (err) {
        return console.log(err);
    }
}