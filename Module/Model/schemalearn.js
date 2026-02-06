const mongoose = require("mongoose")

const learnSchema = new mongoose.Schema({
    userName: {
        type: String,
        default: ""
    },
    age: {
        type: String,
        default: ""
    }
})

const learnModel = mongoose.model("learn", learnSchema)
module.exports = learnModel;