module.exports = (sequelize, DataTypes) => {
  const FlightSeats = sequelize.define('FlightSeats', {
    flightId: DataTypes.INTEGER,
    seatNumber: DataTypes.INTEGER,
    filled: DataTypes.BOOLEAN
  }, {
    tableName: 'flightSeats'
  });
  
  return FlightSeats;
};
