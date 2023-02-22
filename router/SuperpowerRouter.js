const { Router } = require("express");
const SuperpowerControlers = require("../controlers/superpowerController");

const superpowerRouter = Router()


superpowerRouter.post('/', SuperpowerControlers.createSuperPower)
superpowerRouter.put('/:powerId/hero/:heroId', SuperpowerControlers.addSuperPowerToHero)
superpowerRouter.delete("/powerId",SuperpowerControlers.deletePower)

module.exports = superpowerRouter