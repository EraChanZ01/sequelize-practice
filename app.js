const express = require("express")
const { STATIC_PATH } = require("./config/pathConfig")
const router = require("./router")

const app = express()

app.use(express.json())
app.use(express.static(STATIC_PATH))
app.use("/api", router)


module.exports = app