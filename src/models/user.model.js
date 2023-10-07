const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    emai: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Number,
        default: 0
    },
    token: {
        type: String,
        default: ""
    }
})

const User = mongoose.model("user", userSchema)

module.exports = User

module.exports = User