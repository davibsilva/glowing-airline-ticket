'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('flightSeats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      flightId: {
        references: {
          model: {
            tableName: 'flights',
          },
          key: 'id'
        },
        allowNull: false,
        type: Sequelize.INTEGER
      },
      seatNumber: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      filled: {
        defaultValue: false,
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('flightSeats');
  },
};
