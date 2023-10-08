require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")

const config = require("./src/config")
const bodyParser = require("body-parser")
const path = require("path")
const admin = require("./src/routes/admin.routes")
const settingDone = require("./src/middleware/isBlog")
const app = express()
const port = config.port || 5000

try {
    const connectDb = async () => {
        await mongoose.connect(config.database_url)
        console.log('database connected')
    }
    connectDb()
} catch (error) {
    console.log(error.message)
}


app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs")
app.set("views", "./src/views")
app.use(settingDone)
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use("/admin", admin)

app.listen(port, () => {
    console.log(`this sever running at ${port} `)
})


