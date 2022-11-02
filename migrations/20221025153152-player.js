'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('player', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      race: {
        type: Sequelize.STRING
      },
      class: {
        type: Sequelize.STRING
      },
      guild_id: {
        type: Sequelize.INTEGER
      },
      LEVEL: {
        type: Sequelize.INTEGER
      },
      createdOn: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: 'created_on'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('player');
  }
};
