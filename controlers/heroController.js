const { Superhero, Herotoimage, Superpower } = require("../models");
const fs = require("fs");
const { STATIC_PATH } = require("../config/pathConfig");

module.exports.createHero = async (req, res, next) => {
  try {
    const {
      body,
      files: { ImagesHero },
    } = req;
    const hero = await Superhero.create(body);
    if (ImagesHero) {
      const addImage = await ImagesHero.map((file) => {
        hero.createHerotoimage({
          pathImage: file.filename,
        });
      });
    }
    if (body.arrayPowerId) {
      body.arrayPowerId.forEach((id) => {
        Superpower.findByPk(id).then((data) => hero.addSuperpower(data));
      });
    }

    return res.status(201).send("Hero created");
  } catch (error) {
    next(error);
  }
};

module.exports.updateHero = async (req, res, next) => {
  try {
    const {
      body,
      params: { heroId },
      files: { ImagesHero },
    } = req;
    const hero = await Superhero.findByPk(heroId);
    const resultHeroUpdate = await hero.update(body);
    if (ImagesHero) {
      const resultImageUpfate = await ImagesHero.map((file) => {
        hero.createHerotoimage({
          pathImage: file.filename,
        });
      });
    }
    return res.status(202).send("Hero Updated");
  } catch (error) {
    next(error);
  }
};

module.exports.deleteHero = async (req, res, next) => {
  try {
    const {
      params: { heroId },
    } = req;
    const hero = await Superhero.findByPk(heroId);
    const imagehero = await Herotoimage.findAll({
      heroId,
    });
    const result = await hero.destroy();
    imagehero.forEach((image) =>
      fs.rm(`${STATIC_PATH}/${image.pathImage}`, (err) => {
        if (err) {
          next(err);
        }
      })
    );
    return res.status(200).send("delete Hero");
  } catch (error) {
    next(error);
  }
};

module.exports.getHero = async (req, res, next) => {
  try {
    const {
      params: { heroId },
    } = req;
    const result = await Superhero.findByPk(heroId);
    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

module.exports.findAll = async (req, res, next) => {
  try {
    const result = await Superhero.findAll();
    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

module.exports.pagination = async (req, res, next) => {
  try {
    const {
      pagination: { limit, offset },
    } = req;
    const heroList = await Superhero.findAll({
      limit: limit,
      offset: offset,
    });
    return res.status(200).send(heroList);
  } catch (error) {
    next(error);
  }
};
