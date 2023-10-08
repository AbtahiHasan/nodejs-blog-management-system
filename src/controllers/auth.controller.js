const bcrypt = require("bcrypt")
const User = require("../models/user.model")
const config = require("../config")

const loadLogin = (req, res) => {
    try {
        res.render("login")
    } catch (error) {

    }
}
const login = async (req, res) => {
    try {

        console.log(14, req.body)
        const email = req.body?.email
        const password = req.body?.password

        const user = await User.findOne({ email })
        console.log(19, user)
        if (!user) {
            res.redirect("/")
        }



        const passwordIsMatched = bcrypt.compare(password, user?.password)

        const cookieOptions = {
            httpOnly: config.env === "production",
            secure: config.env === "production",
            // signed: config.env === "production",
            expires: new Date(Date.now() + 720 * 3600000)
        }

        if (passwordIsMatched) {
            res.cookie("user", {
                name: user.name,
                email: user.email,
                profile: user.profile,
                is_admin: user.is_admin,
            }, cookieOptions)
            if (user.is_admin === 1) {
                res.redirect("/admin")
            } else {
                res.redirect("/profile")

            }
        }
        else {
            res.redirect("/")
        }


    } catch (error) {
        console.log(error)
    }
}

const loadDashboard = (req, res) => {
    try {
        res.render("admin/dashboard")
    } catch (error) {

    }
}


const logout = (req, res) => {
    try {
        res.clearCookie("user")
        res.redirect("/login")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    loadLogin,
    login,
    loadDashboard,
    logout
}