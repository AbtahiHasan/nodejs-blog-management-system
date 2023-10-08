const dotenv = require("dotenv")
const path = require("path")

dotenv.config({ path: path.join(process.cwd(), ".env") })


module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    database_url: process.env.DB_URL,
    session_secret: process.env.SESSION_SECRET,
}

