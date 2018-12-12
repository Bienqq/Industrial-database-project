const Sequelize = require("sequelize")

const businessDatabase = new Sequelize(`${process.env.BUSSINESS_DB_SCHEMA_NAME}`, `${process.env.DB_LOGIN}`, `${process.env.DB_PASSWORD}`, {
    host: `${process.env.BUSINESS_DB_ADDRESS}`,
    dialect: "postgres"
})

businessDatabase.authenticate()
    .then(() => console.log("Connection with business database has been established successfully"))
    .catch(error => console.error("Unable to connect to the business database: " +  error))

module.exports = businessDatabase