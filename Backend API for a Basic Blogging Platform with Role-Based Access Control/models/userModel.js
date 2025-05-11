const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    role: {
        type: String,
        enum: ["user", "author", "admin"],
        default: "user"
    }
})

module.exports = mongoose.model("user", userSchema);