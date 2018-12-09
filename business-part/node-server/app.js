const express = require("express")
const app = express()
const morgan = require("morgan")
const cron = require("node-cron");

const data = require("./api/routes/data")
const params = require("./api/routes/params")
const updateBusinessDatabase = require("./api/jobs/updateBusinessDatabase")

// for CORS only
app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*")
    next()
})

// logging request to console
app.use(morgan("dev"))

app.use("/business", data)
app.use("/business", params)

// scheduled task to update Business database
//let period = "0 8 * * *" // updating every day at 8:00 am
const period = 60 // updating every 10 seconds for test only

cron.schedule(`*/${period} * * * * *`, () => {
    updateBusinessDatabase().then(() => console.log('\n------------------------\nBusiness database has been updated\n------------------------\n'))
});

module.exports = app;