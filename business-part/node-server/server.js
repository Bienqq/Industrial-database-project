const os = require("os");
const app = require("./app")

const port = process.env.SERVER_PORT || 8090;

app.listen(port, () => {
  console.log("-------------------APLICATION STARTED--------------------");
  console.log("Hostname : " + os.hostname());
  const serverAddress = `http://localhost:${port}`;
  console.log(`Server is listening at : ${serverAddress}`);
})