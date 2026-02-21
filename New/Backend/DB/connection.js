import mongoose from "mongoose";
import config from "../config";

export const connectDB = async () => {
    try {

        await mongoose.connect(config.MONGOURI);
        console.log("Mongodb connected successfully")
    } catch (e) {
        console.log("connectDB__Err", e)
    }
}