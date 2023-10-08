const bcrypt = require("bcrypt")
const Setting = require("../models/settings.model")
const User = require("../models/user.model")

const loadSetup = async (req, res) => {
    try {
        res.render("setup")
    } catch (error) {

    }
}

const setup = async (req, res) => {
    try {
        const data = req.body
        const setting = {
            title: data.title,
            description: data.description,
            logo: req.file.filename
        }

        await Setting.create(setting)
        const hashPassword = await bcrypt.hash(data.password, 10)
        const admin = {
            name: data.title,
            email: data.email,
            password: hashPassword,
            profile: "https://avatars.githubusercontent.com/u/101439174?s=400&u=a980299f0769678c6728415e68799e6ab8f8efbd&v=4",
            is_admin: 1,
        }

        const isAdminCreated = await User.create(admin)

        if (isAdminCreated?.email) {
            res.redirect("/admin/login")
        }
        res.redirect("/admin/setup")
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    loadSetup,
    setup
}