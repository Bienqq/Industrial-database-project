const express = require("express")

module.exports = class BusinessServer {
    constructor(port) {
        this.app = express()
        this.app.listen(port);
    }
}