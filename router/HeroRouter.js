const { Router } = require("express");
const HeroControlers = require("../controlers/heroController");
const multer = require("multer");
const {STATIC_PATH} = require("../config/pathConfig")
const pagination = require("../middlewares/pagination")

const storage = multer.diskStorage({
  destination: function (req, file, cd) {
    cd(null, STATIC_PATH);
  },
  filename: function (req, file, cd) {
    cd(null, `${Date.now()}.${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

const heroRouter = Router();

heroRouter.post("/",upload.fields([{ name: "ImagesHero", maxCount: 3 }]),HeroControlers.createHero);
heroRouter.put("/:heroId", upload.fields([{name:"ImagesHero", maxCount: 3}]),HeroControlers.updateHero);
heroRouter.delete("/:heroId",HeroControlers.deleteHero);
heroRouter.get('/:heroId',HeroControlers.getHero)
heroRouter.get('/', HeroControlers.findAll)
heroRouter.get('/list/pagination', pagination,HeroControlers.pagination);

module.exports = heroRouter;
