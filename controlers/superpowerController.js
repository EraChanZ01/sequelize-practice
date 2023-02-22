const { Superpower,Superhero } = require("../models");

module.exports.createSuperPower = async (req, res, next) => {
  try {
    const { body } = req;
    const result = Superpower.create(body);
    return res.status(201).send("Super power created");
  } catch (error) {
    next(error);
  }
};

module.exports.addSuperPowerToHero = async (req, res, next) => {
  try {
    const {
      params: { heroId,powerId},
    } = req;
    const superPower = await Superpower.findByPk(powerId)
    const hero = await Superhero.findByPk(heroId)
    const result = await superPower.addSuperhero(hero)
    return res.status(200).send("Super power add to Hero")
  } catch (error) {
    next(error)
  }
};

module.exports.deletePower = async (req, res, next) => {
  try {
    const {params:powerId} = req
    const result = await Superpower.delete(powerId)
    return req.status(200).send("Power delete")
  }catch(error){
    next(error)
  }
}
