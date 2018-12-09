const express = require("express")
const router = express.Router()

const dataModel = require("../models/industrialData")

router.get("/data", (request, response) => {

    let result = dataModel.findAll({
        where: {
            id: 999999999999
        }
    })
    result
    .then( (queryResult) =>     response.status(200).send( queryResult))
    .catch( (error) => response.status(500).send("ERROR"))

});

module.exports = router;