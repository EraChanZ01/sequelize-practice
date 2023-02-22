const { Router } = require("express");
const heroRouter = require("./HeroRouter");
const superpowerRouter = require("./SuperpowerRouter")


const router = Router()

router.use("/hero",heroRouter)
router.use("/power",superpowerRouter)



module.exports = router
