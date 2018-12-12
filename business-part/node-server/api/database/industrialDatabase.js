const Sequelize = require("sequelize")

const industrialDatabase = new Sequelize(`${process.env.INDUSTRIAL_DB_SCHEMA_NAME}`, `${process.env.DB_LOGIN}`, `${process.env.DB_PASSWORD}`, {
    host: `${process.env.INDUSTRIAL_DB_ADDRESS}`,
    dialect: "postgres"
})

industrialDatabase.authenticate()
    .then(() => console.log("Connection with industrial database has been established successfully"))
    .catch(error => console.error("Unable to connect to the industrial database: " + error))

module.exports = industrialDatabase