const express = require("express")
const router = express.Router()

router.get("/params", (request, response) => {
    response.status(200)
});

module.exports = router;
