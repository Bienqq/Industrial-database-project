const BusinessServer = require("./server/server")
const dns = require('dns')
const os = require('os')
const PORT = 8090

dns.lookup(os.hostname(), (error, address, fam) => {
    console.log("-------------------APLICATION STARTED--------------------")
    console.log("Hostname : " + os.hostname())
    console.log('IP : ' + address);
    const serverAddress = `http://${address}:${PORT}`
    console.log(`Server is listening at ${serverAddress}`)
    const server = new BusinessServer(PORT)
    server.init()
})