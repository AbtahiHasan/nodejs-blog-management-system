const nodemailer = require("nodemailer")
const config = require("../config")


const sendMail = (email, name, token) => {
    try {
        const transport = nodemailer.createTransport({
            host: config.host,
            port: config.port,
            service: config.smtp_service,
            secure: false,
            requireTLS: true,
            auth: {
                user: config.smtp_mail,
                pass: config.smtp_password
            }
        })

        const mailOptions = {
            from: config.smtp_mail,
            to: email,
            subject: 'BMS Reset password',
            html: `<p>please <a herf="${'http://localhost:3000/forget-password/' + token
                }"> here to reset your password</p>`
        }

        transport.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error.message)
            }
        })
    } catch (error) {
        console.log(28, error.message)
    }
}

module.exports = sendMail