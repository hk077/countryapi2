const { Router } = require("express")

const cc = require("../controllers/country-controller")

const cr = Router()

//Define our routes
cr.get("/", cc.index)

module.exports = cr