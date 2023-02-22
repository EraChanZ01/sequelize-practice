"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Herotoimage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Herotoimage.belongsTo(models.Superhero,{
          foreignKey:'heroId'
        })
    }
  }
  Herotoimage.init(
    {
      heroId: {
        field: "hero_id",
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      pathImage: {
        field: "path_image",
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Herotoimage",
      tableName: "superhero_to_images",
      underscored: true,
    }
  );
  return Herotoimage;
};
