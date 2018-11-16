const express = require("express")
const path = require('path');


module.exports = class BusinessServer {
    constructor(port) {
        this.app = express()

        // directory with html, styles, scripts
        this.app.use(express.static(__dirname + "\\..\\public"))

        //directory with views
        this.viewsPath = path.resolve(__dirname + "\\..\\public\\views")

        //including Bootstrap, jQuery, Popper, Vue etc.
        this.app.use(express.static(__dirname + "/../../node_modules"))
        this.app.listen(port);
    }

    init() {
        this.app.get("/index", (request, response) => {
            response.statusCode = 200
            response.header("Access-Control-Allow-Origin", "*")
            response.send("DZIALA")
        });
    }
}