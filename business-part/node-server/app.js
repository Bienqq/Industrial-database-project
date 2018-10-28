const BusinessServer = require("./server/server");
const dns = require("dns");
const os = require("os");
const postgres = require("pg");

const PORT = 8090;
const connectionString = "postgres://postgres:admin@localhost:5432/BBD";

// starting application
dns.lookup(os.hostname(), (error, address, fam) => {
  console.log("-------------------APLICATION STARTED--------------------");
  console.log("Hostname : " + os.hostname());
  console.log("IP : " + address);
  const serverAddress = `http://${address}:${PORT}`;
  console.log(`Server is listening at : ${serverAddress}/index`);
  const server = new BusinessServer(PORT);
  server.init();
  const databaseClient = new postgres.Client(connectionString);
  databaseClient
    .connect()
    .then(console.log("Connected with business database"))
    .catch("Error during connecting with database");
});