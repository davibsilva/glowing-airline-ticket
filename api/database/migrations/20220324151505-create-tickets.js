'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tickets', {
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
      customerId: {
        references: {
          model: {
            tableName: 'customers',
          },
          key: 'id'
        },
        allowNull: false,
        type: Sequelize.INTEGER
      },
      flightSeatId: {
        references: {
          model: {
            tableName: 'flightSeats',
          },
          key: 'id'
        },
        allowNull: false,
        type: Sequelize.INTEGER
      },
      purchaseDate: {
        defaultValue: Sequelize.fn('now'),
        allowNull: false,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('tickets');
  },
};
