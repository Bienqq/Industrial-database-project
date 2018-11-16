const express = require("express")
const router = express.Router()
const Database = require("./Database")
const database = new Database()


router.get("/data", (request, response) => {
    response.header("Access-Control-Allow-Origin", "*")
    var dataPromise = database.getIndustrialData()
    dataPromise
        .then(result => response.status(200).send(result.rows))
        .catch(error => response.status(500).send(error))
});

router.get("/parameters", (request, response) => {
    response.header("Access-Control-Allow-Origin", "*")
    var dataPromise = database.getIndustrialParameters()
    dataPromise
        .then(result => response.status(200).send(result.rows))
        .catch(error => response.status(500).send(error))
});

module.exports = router;