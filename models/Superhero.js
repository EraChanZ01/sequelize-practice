'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superhero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Superhero.belongsToMany(models.Superpower,{
        through:"superpower_to_hero",
        foreignKey: 'heroId'
      })
      Superhero.hasMany(models.Herotoimage,{
        foreignKey:'heroId',
        onDelete: 'CASCADE', hooks: true
      })
    }
  }
  Superhero.init({
    nickName:{ type:DataTypes.STRING, allowNull:false,validate:{
      notEmpty:true
    }},
    realName: {type:DataTypes.STRING},
    originDiscription: {type:DataTypes.TEXT},
    cathPhrase: {type:DataTypes.TEXT}
  }, {
    sequelize,
    modelName: 'Superhero',
    tableName: "superheros",
    underscored:true
  });
  return Superhero;
};