const express = require("express")
const app = express()

const controller = require("./controller")
app.use("/business", controller)

module.exports = app;