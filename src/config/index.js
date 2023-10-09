const dotenv = require("dotenv")
const path = require("path")

dotenv.config({ path: path.join(process.cwd(), ".env") })


module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    database_url: process.env.DB_URL,
    session_secret: process.env.SESSION_SECRET,
    smtp_host: process.env.SMTP_HOST,
    smtp_port: process.env.SMTP_POST,
    smtp_service: process.env.SMTP_SERVICE,
    smtp_mail: process.env.SMTP_MAIL,
    smtp_password: process.env.SMTP_PASSWORD,
}

