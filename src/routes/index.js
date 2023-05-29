const express = require("express")
const router = express.Router()

router.get("/", function (req,res) {
    res.status(200).send({
        title: "Projeto Delas",
        version: "1.0.0"
    })
})

module.exports = router

