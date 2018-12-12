const businessModel = require("../models/businessData")
const industrialModel = require("../models/industrialData")
const db = require("../database/industrialDatabase")
const Op = require("sequelize").Op


const INDSUTRIAL_DB_SEQ_NAME = process.env.INDSUTRIAL_DB_SEQ_NAME
const STARTING_SEQ_NAME = process.env.STARTING_SEQ_NAME

async function getBusinessResults(uniqueElements, result) {
    let businessResults = [];
    for (let i = 0; i < uniqueElements.length; i++) {
        const filtered = result.filter(res => res.date.substring(0, 10) === uniqueElements[i])

        let t1wy = 0.0,
            t2wy = 0.0,
            t1we = 0.0,
            t2we = 0.0,
            v1 = 0.0,
            v2 = 0.0;

        [...filtered].forEach(el => {
            t1wy += el.t1wy
            t2wy += el.t2wy
            t1we += el.t1we
            t2we += el.t2we
            v1 += el.v1
            v2 += el.v2
        })

        t1wy /= filtered.length
        t2wy /= filtered.length
        t1we /= filtered.length
        t2we /= filtered.length
        v1 /= filtered.length
        v2 /= filtered.length

        businessResults.push(businessModel.build({
            date: filtered[0].date.substring(0, 10),
            t1wy: t1wy,
            t2wy: t2wy,
            t1we: t1we,
            t2we: t2we,
            v1: v1,
            v2: v2,
        }))
    }
    return businessResults
}

async function updateBusinessDatabase() {

    const lastId = await db.query(`SELECT last_value FROM ${INDSUTRIAL_DB_SEQ_NAME}`, {
        type: db.QueryTypes.SELECT
    })


    const startingId = await db.query(`SELECT last_value FROM ${STARTING_SEQ_NAME}`, {
        type: db.QueryTypes.SELECT
    })

    const startId = parseInt(startingId[0].last_value)
    const endId = parseInt(lastId[0].last_value)

    const result = await industrialModel.findAll({
        where: {
            id: {
                [Op.gte]: startId,
                [Op.lte]: endId
            },
        }
    })

    let uniqueElements = [];
    [...result].forEach(row => {
        let dataString = row.date.substring(0, 10)
        if (!uniqueElements.includes(dataString)) {
            uniqueElements.push(dataString)
        }
    })

    const businessResults = await getBusinessResults(uniqueElements, result)
    businessResults.forEach(res => res.save())

    db.query(`SELECT setval('${STARTING_SEQ_NAME}', ${endId + 1})`, {
        type: db.QueryTypes.SELECT
    }).then(() => console.log("\n------------------------\nNext starting ID will be : " + endId + 1 + "\n------------------------\n"))
}

module.exports = updateBusinessDatabase