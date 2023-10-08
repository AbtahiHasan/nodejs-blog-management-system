const express = require("express")

const admin = express.Router()
const settingController = require("./../controllers/setting.controller")
const authController = require("./../controllers/auth.controller")
const upload = require("../helper/upload")
const uploader = require("../helper/upload")
// admin.get("/", )

const logoUpload = require("../helper/logoUpload")
const { adminIsLoginedIn } = require("../middleware/auth")
const uploadLogo = logoUpload()

admin.get("/", adminIsLoginedIn, authController.loadDashboard)
admin.get("/setup", settingController.loadSetup)
admin.post("/setup", uploadLogo.single("logo"), settingController.setup)





module.exports = admin