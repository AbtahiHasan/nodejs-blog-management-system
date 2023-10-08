const express = require("express")

const user = express.Router()
const settingController = require("./../controllers/setting.controller")
const authController = require("./../controllers/auth.controller")
const upload = require("../helper/upload")
const uploader = require("../helper/upload")
// admin.get("/", )

const logoUpload = require("../helper/logoUpload")
const { isLogout, userIsLoginedIn, isLogedIn } = require("../middleware/auth")



user.get("/login", isLogout, authController.loadLogin)
user.post("/login", authController.login)
user.get("/profile", userIsLoginedIn, authController.loadLogin)
user.get("/logout", isLogedIn, authController.logout)



module.exports = user