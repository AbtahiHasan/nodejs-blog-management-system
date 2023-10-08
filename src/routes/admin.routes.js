const express = require("express")

const admin = express.Router()
const settingController = require("./../controllers/setting.controller")
const authController = require("./../controllers/auth.controller")
const postController = require("./../controllers/post.controller")
const upload = require("../helper/upload")
const uploader = require("../helper/upload")
// admin.get("/", )

const logoUpload = require("../helper/logoUpload")
const { adminIsLoginedIn } = require("../middleware/auth")
const thumbnailUpload = require("../helper/thumbnailUpload")
const uploadLogo = logoUpload()
const uploadThumbnail = thumbnailUpload()

admin.get("/", adminIsLoginedIn, authController.loadDashboard)
admin.get("/setup", settingController.loadSetup)
admin.post("/setup", uploadLogo.single("logo"), settingController.setup)


admin.get("/create-post", postController.loadCreatePost)
admin.post("/create-post", uploadThumbnail.single("thumbnail"), postController.createPost)





module.exports = admin