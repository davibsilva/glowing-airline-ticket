module.exports = (sequelize, DataTypes) => {
  const Airports = sequelize.define('Airports', {
    name: DataTypes.STRING
  }, {
    tableName: 'airports'
  });
  
  return Airports;
};
