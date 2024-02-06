const { Router } = require("express")

const cc = require("../controllers/country-controller")

const cr = Router()

//Define our routes
cr.get("/", cc.index)
cr.get("/:name", cc.show)
cr.post("/", cc.create)
cr.delete("/:name", cc.destroy)
cr.patch("/:name", cc.update)

module.exports = cr