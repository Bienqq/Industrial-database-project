const BusinessServer = require("./server/server");
const dns = require("dns");
const os = require("os");
const postgres = require("pg");

const PORT = 8090;
const BBD = "postgres://postgres:admin@localhost:5432/BBD";
const PBD = "postgres://postgres:admin@localhost:5432/mydb";

//const pbdString = "postgres://admin:admin@192.168.137.1:5432/mydb";

// starting application
dns.lookup(os.hostname(), (error, address, fam) => {
  console.log("-------------------APLICATION STARTED--------------------");
  console.log("Hostname : " + os.hostname());
  console.log("IP : " + address);
  const serverAddress = `http://${address}:${PORT}`;
  console.log(`Server is listening at : ${serverAddress}/index`);
  const server = new BusinessServer(PORT);
  server.init();
  const businesDatabaseClient = new postgres.Client(BBD);
  businesDatabaseClient.connect()
  
  const industrialDatabaseclient = new postgres.Client(PBD);
  industrialDatabaseclient.connect()
});