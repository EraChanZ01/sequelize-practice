"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "superheros",
      [
        {
          nick_name: "Payk",
          real_name: "Milka",
          cath_phrase: "Я нет, некогда",
          created_at: Date.now().toString(),
          updated_at:  Date.now().toString()
        },
        {
          nick_name: "SuperWomen",
          real_name: "Robert",
          cath_phrase: "Лучше чем было",
          created_at: Date.now().toString(),
          updated_at:  Date.now().toString()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("superheros",null,{})
  },
};
