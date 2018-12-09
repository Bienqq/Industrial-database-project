const Sequelize = require("sequelize")

const BBD = `postgres://${process.env.DB_LOGIN}:${process.env.DB_PASSWORD}@${process.env.BUSINESS_DB_ADDRESS}:${process.env.DB_PORT}/${process.env.BUSSINESS_DB_SCHEMA_NAME}`;

const businessDatabase = new Sequelize(BBD)

businessDatabase.authenticate()
    .then(() => console.log("Connection with business database has been established successfully"))
    .catch(error => console.error("Unable to connect to the business database: ", error))

module.exports = businessDatabase 