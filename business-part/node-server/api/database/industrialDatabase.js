const Sequelize = require("sequelize")

const PBD = `postgres://${process.env.DB_LOGIN}:${process.env.DB_PASSWORD}@${process.env.INDUSTRIAL_DB_ADDRESS}:${process.env.DB_PORT}/${process.env.INDUSTRIAL_DB_SCHEMA_NAME}`;

const industrialDatabase = new Sequelize(PBD)

industrialDatabase.authenticate()
    .then(() => console.log("Connection with industrial database has been established successfully"))
    .catch(error => console.error("Unable to connect to the industrial database: ", error))

module.exports = industrialDatabase