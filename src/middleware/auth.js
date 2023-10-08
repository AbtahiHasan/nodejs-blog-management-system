const adminIsLoginedIn = (req, res, next) => {
    try {


        if (req?.cookies?.user?.email && parseInt(req?.cookies?.user?.is_admin) === 1) {
            next()
        }
        else {
            res.redirect("/login")
        }
    } catch (error) {

    }
}
const userIsLoginedIn = (req, res, next) => {
    try {


        if (req?.cookies?.user?.email && parseInt(req?.cookies?.user?.is_admin) === 0) {
            next()
        }
        else {
            res.redirect("/login")
        }
    } catch (error) {

    }
}


const isLogedIn = (req, res, next) => {
    try {
        if (req?.cookies?.user?.email) {
            next()
        }
        else {
            res.redirect("/login")
        }
    } catch (error) {

    }
}

const isLogout = (req, res, next) => {
    try {
        if (!req?.cookies?.user) {
            next()
        } else if (req?.cookies?.user?.is_admin === 1) {
            res.redirect("/admin")
        } else {
            res.redirect("/")
        }
    } catch (error) {

    }
}


module.exports = {
    adminIsLoginedIn,
    userIsLoginedIn,
    isLogedIn,
    isLogout
}