module.exports = (sequelize, DataTypes) => {
  const Customers = sequelize.define('Customers', {
    name: DataTypes.STRING,
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING
  }, {
    tableName: 'customers'
  });
  
  return Customers;
};
