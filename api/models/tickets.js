module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Tickets', {
    flightId: DataTypes.INTEGER,
    customerId: DataTypes.INTEGER,
    flightSeatId: DataTypes.INTEGER,
    purchaseDate: DataTypes.DATE
  }, {
    tableName: 'tickets'
  });
  
  return Ticket;
};
