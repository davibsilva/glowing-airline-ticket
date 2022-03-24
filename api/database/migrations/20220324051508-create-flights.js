'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      departureTime: {
        allowNull: false,
        type: Sequelize.TIME
      },
      arrivalTime: {
        allowNull: false,
        type: Sequelize.TIME
      },
      originAirportId: {
        references: {
          model: {
            tableName: 'airports',
          },
          key: 'id'
        },
        allowNull: false,
        type: Sequelize.INTEGER
      },
      destinationAirportId: {
        references: {
          model: {
            tableName: 'airports',
          },
          key: 'id'
        },
        allowNull: false,
        type: Sequelize.INTEGER
      },
      totalSeats: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ticketPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
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
    await queryInterface.dropTable('flights');
  },
};
