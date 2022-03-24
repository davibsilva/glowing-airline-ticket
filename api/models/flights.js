module.exports = (sequelize, DataTypes) => {
  const Flights = sequelize.define('Flights', {
    departureTime: DataTypes.TIME,
    arrivalTime: DataTypes.TIME,
    originAirportId: DataTypes.INTEGER,
    destinationAirportId: DataTypes.INTEGER,
    totalSeats: DataTypes.INTEGER,
    ticketPrice: DataTypes.DECIMAL
  }, {
    tableName: 'flights'
  });
  
  return Flights;
};
