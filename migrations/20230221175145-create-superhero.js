'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('superheros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickName: {
        field:"nick_name",
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          notEmpty:true
        }
      },
      realName: {
        field:"real_name",
        type: Sequelize.STRING
      },
      originDiscription: {
        field:"origin_discription",
        type: Sequelize.TEXT
      },
      cathPhrase: {
        field:"cath_phrase",
        type: Sequelize.TEXT
      },
      createdAt: {
        field:"created_at",
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field:"updated_at",
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('superheros');
  }
};