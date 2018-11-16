const dns = require("dns");
const os = require("os");
const app = require("./server/app")
const PORT = 8090;

//const pbdString = "postgres://admin:admin@192.168.137.1:5432/mydb";

// starting application
dns.lookup(os.hostname(), (error, address, fam) => {
  app.listen(PORT, () => {
    console.log("-------------------APLICATION STARTED--------------------");
    console.log("Hostname : " + os.hostname());
    console.log("IP : " + address);
    const serverAddress = `http://${address}:${PORT}`;
    console.log(`Server is listening at : ${serverAddress}`);
  })
});