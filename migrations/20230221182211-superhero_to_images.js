"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("superhero_to_images", {
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
      pathImage: {
        field: "path_image",
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
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
    await queryInterface.dropTable("superhero_to_images");
  },
};
