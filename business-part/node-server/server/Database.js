const pg = require("pg")
const BBD = "postgres://postgres:admin@localhost:5432/BBD";
const PBD = "postgres://postgres:admin@localhost:5432/mydb";


module.exports = class Database {

    constructor() {
        this.businessDatabaseClient = new pg.Client(BBD)
        this.industrialDatabaseClient = new pg.Client(PBD)
        this.businessDatabaseClient.connect()
        this.industrialDatabaseClient.connect()
    }

    getIndustrialData() {
        return this.industrialDatabaseClient.query("SELECT * FROM \"dane\"")
    }

    getIndustrialParameters() {
        return this.industrialDatabaseClient.query("SELECT * FROM \"parametry\"")
    }
}