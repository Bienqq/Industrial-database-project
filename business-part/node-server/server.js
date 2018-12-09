const dns = require("dns");
const os = require("os");
const app = require("./app")

const port = process.env.SERVER_PORT || 8090;

dns.lookup(os.hostname(), (error, address, fam) => {
  app.listen(port, () => {
    console.log("-------------------APLICATION STARTED--------------------");
    console.log("Hostname : " + os.hostname());
    console.log("IP : " + address);
    const serverAddress = `http://${address}:${port}`;
    console.log(`Server is listening at : ${serverAddress}`);
  })
});