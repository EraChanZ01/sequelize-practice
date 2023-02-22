"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("superpower_to_hero", {
      heroId: {
        field: "hero_id",
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "superheros",
            key: "id",
          },
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        },
      },
      superPowerId: {
        field: "super_power_id",
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "superpowers",
            key: "id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
        },
      },
      createdAt: {
        field: "created_at",
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: "updated_at",
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("superpower_to_hero");
  },
};
