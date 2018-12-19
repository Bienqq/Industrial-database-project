const express = require("express")
const router = express.Router()
const moment = require("moment")
const Op = require("sequelize").Op

const dataModel = require("../models/businessData")

const C1 = process.env.POWER_C1
const C2 = process.env.COSTS_C2
const C3 = process.env.COSTS_C3

async function getData(daysAgo) {
    return dataModel.findAll({
        where: {
            date: {
                [Op.eq]: moment().subtract(daysAgo, 'days').toDate().setHours(1, 0, 0, 0),
            }
        }
    })
}

router.get("/data", async (request, response) => {

    let waterConsumption = 0.0,
        heatConsumption = 0.0,
        powerConsumption = 0.0,
        totalCosts = 0.0

    for (let i = 0; i < 7; i++) {
        const results = await getData(i)

        let tempWaterConsumption = 0.0
        let tempHeatConsumption = 0.0
        let x = 0.0
        let v1_v2 = 0.0

        results.forEach(row => {
            tempWaterConsumption += row.v1 + row.v2
            x += row.t1we / 100
            tempHeatConsumption += row.t2wy
            v1_v2 += row.v1 * row.v2
        })

        waterConsumption += (24 * 60) * tempWaterConsumption / results.length
        heatConsumption += tempHeatConsumption / results.length
        v1_v2 /= results.length


        powerConsumption += 24 * 60 * C1 * (Math.pow(x, 3) + 2 * Math.pow(x, 2))
        totalCosts += C2 * 24 * 60 * (v1_v2) + C3 * powerConsumption
    }

    waterConsumption /= 7
    heatConsumption /= 7
    powerConsumption /= 7
    totalCosts /= 7

    response.status(200).json({
        water: waterConsumption,
        power: powerConsumption,
        heat: heatConsumption,
        costs: totalCosts
    })

});

router.get("/consumption-charts", async (request, response) => {

    const waterConsumptionPerDay = []
    const heatConsuptionPerDay = []

    for (let i = 0; i < 7; i++) {
        const results = await getData(i)
        let tempWaterConsumption = 0.0
        let tempHeatConsumption = 0.0

        results.forEach(row => {
            tempWaterConsumption += 24 * 60 * (row.v1 + row.v2)
            tempHeatConsumption += 24 * 60 * row.t2wy

        })

        waterConsumptionPerDay.push(tempWaterConsumption / results.length)
        heatConsuptionPerDay.push(tempHeatConsumption / results.length)
    }

    heatConsuptionPerDay.reverse()
    waterConsumptionPerDay.reverse()

    response.status(200).json({
        water: waterConsumptionPerDay,
        heat: heatConsuptionPerDay
    })
})

router.get("/temperature-charts", async (request, response) => {
    const t1out = []
    const t2out = []

    for (let i = 0; i < 7; i++) {
        const results = await getData(i)
        let tempT1out = 0.0
        let tempT2out = 0.0

        results.forEach(row => {
            tempT1out += row.t1wy
            tempT2out += row.t2wy
        })

        t1out.push(tempT1out / results.length)
        t2out.push(tempT2out / results.length)
    }
    t1out.reverse()
    t2out.reverse()

    response.status(200).json({
        t1out: t1out,
        t2out: t2out
    })
})


module.exports = router;