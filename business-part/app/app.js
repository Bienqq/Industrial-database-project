const BusinessServer = require("./server/server")
const dns = require('dns')
const os = require('os')
const postgres = require('pg')

const PORT = 8090
const connectionString = "postgres://postgres:admin@localhost:5432/BBD"
const databaseClient = new postgres.Client(connectionString)






dns.lookup(os.hostname(), async (error, address, fam) => {
    console.log("-------------------APLICATION STARTED--------------------")
    console.log("Hostname : " + os.hostname())
    console.log('IP : ' + address);
    const serverAddress = `http://${address}:${PORT}`
    console.log(`Server is listening at : ${serverAddress}`)
    const server = new BusinessServer(PORT)
    server.init()
    await databaseClient.connect()
    var res =  databaseClient.query("SELECT * FROM \"Test\"")
    res.then(row => row.rows.forEach(row=> console.log(row))).catch

})