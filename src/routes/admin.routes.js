const express = require("express")

const admin = express.Router()
const settingController = require("./../controllers/setting.controller")
// admin.get("/", )
admin.get("/setup", settingController.loadSetup)

module.exports = admin