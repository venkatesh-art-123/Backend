const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required : true
    },
    password: {
        type: String,
    },
    email : {
        type : String,
        required : true
    },
    age : {
        type : Number,
    }

});
let User = mongoose.model("users", userSchema)
module.exports = User;