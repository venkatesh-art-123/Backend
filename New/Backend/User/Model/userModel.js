import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
    userName: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        default: ""
    },
    password: {
        type: String,
        default: ""
    }
});

const userModel = mongoose.model("users", userSchema);

export default userModel;