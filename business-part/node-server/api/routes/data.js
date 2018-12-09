const express = require("express")
const router = express.Router()
const moment = require("moment")

const dataModel = require("../models/businessData")

const C1 = process.env.POWER_C1
const C2 = process.env.COSTS_C2
const C3 = process.env.COSTS_C3

router.get("/data", (request, response) => {
    dataModel.findAll({
            where: {
                date: {
                    $lte: moment().subtract(7, 'days').toDate()
                }
            }
        })
        .then(results => {

            let waterConsumption = 0.0,
                heatConsumption = 0.0,
                powerConsumption = 0.0,
                totalCosts = 0.0

            results.forEach(row => {
                waterConsumption += 24 * 60 * (row.v1 + row.v2)
                let x =  (row.t1we / 100)
                heatConsumption +=  row.t2wy
                powerConsumption += 24 * 60 *  C1 * (Math.pow(-x , 3) + 2 * Math.pow(x , 2))
                totalCosts += C2 * 24* 60 * (row.v1 * row.v2) + C3 * powerConsumption
            })

            response.status(200).json({
                water: waterConsumption,
                power: powerConsumption,
                heat: heatConsumption / results.length,
                costs: totalCosts
            })
        })
        .catch(err => response.status(500).send(err))
});

module.exports = router;