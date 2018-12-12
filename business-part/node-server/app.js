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


const PERIOD = process.env.UPDATE_PERIOD_SECONDS 

cron.schedule(`*/${PERIOD} * * * * *`, () => {
    updateBusinessDatabase().then(() => console.log('\n------------------------\nBusiness database has been updated\n------------------------\n'))
});

module.exports = app;