const mongoose = require("mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    age: Number,
    gender: {
        type: String,
        enum: ["m", "M", "f", "F"]
    },
    is_active: {
        type: Boolean,
        default: true
    }
})

const User = new mongoose.model("User", userSchema)

module.export = user