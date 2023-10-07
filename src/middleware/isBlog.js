const Setting = require("../models/settings.model")

const settingDone = async (req, res, next) => {
    try {
        const setting = await Setting.find({})

        if (setting.length === 0 && req.originalUrl !== "/admin/setup") {
            res.redirect("/admin/setup")
        } else {
            next()
        }
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = settingDone