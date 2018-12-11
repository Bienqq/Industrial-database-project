const express = require("express")
const router = express.Router()
const moment = require("moment")

const dataModel = require("../models/businessData")

const C1 = process.env.POWER_C1
const C2 = process.env.COSTS_C2
const C3 = process.env.COSTS_C3

async function getData() {
    return dataModel.findAll({
        where: {
            date: {
                $lte: moment().subtract(7, 'days').toDate()
            }
        }
    })
}

router.get("/data", (request, response) => {
    getData()
        .then(results => {

            let waterConsumption = 0.0,
                heatConsumption = 0.0,
                powerConsumption = 0.0,
                totalCosts = 0.0

            results.forEach(row => {
                waterConsumption += 24 * 60 * (row.v1 + row.v2)
                let x = (row.t1we / 100)
                heatConsumption += row.t2wy
                powerConsumption += 24 * 60 * C1 * (Math.pow(-x, 3) + 2 * Math.pow(x, 2))
                totalCosts += C2 * 24 * 60 * (row.v1 * row.v2) + C3 * powerConsumption
            })

            response.status(200).json({
                water: waterConsumption,
                power: powerConsumption,
                heat: heatConsumption / results.length,
                costs: totalCosts
            })
        })
        .catch(error => response.status(500).send(error))
});

router.get("/consumption-charts", (request, response) => {
    getData().then(results => {
        const waterConsumptionPerDay = []
        const heatConsuptionPerDay = []

        results.forEach(row => {
            const waterConsumption = 24 * 60 * (row.v1 + row.v2)
            const heatConsumption = 24 * 60 * row.t2wy
            waterConsumptionPerDay.push(waterConsumption)
            heatConsuptionPerDay.push(heatConsumption)
        })

        response.status(200).json({
            water: waterConsumptionPerDay,
            heat: heatConsuptionPerDay
        })


    }).catch(error => response.status(500).send(error))
})

router.get("/temperature-charts", (request, response) => {
    const t1out = []
    const t2out = []

    getData().then(results => {
        results.forEach(row => {
            t1out.push(row.t1wy)
            t2out.push(row.t2wy)
        })

        response.status(200).json({
            t1out: t1out,
            t2out: t2out
        })
    }).catch(error => response.status(500).send(error))
})


module.exports = router;