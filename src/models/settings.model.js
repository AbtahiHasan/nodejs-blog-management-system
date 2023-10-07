const mongoose = require("mongoose")


const SettingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    }
})

const Setting = mongoose.model("setting", SettingSchema)

module.exports = Setting