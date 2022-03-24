module.exports = app => {
  
  const { Customers } = require('../models');

  const controller = {};

  controller.listCustomers = async (req, res) => {
    try {
      const customers = await Customers.findAll();
      var status;

      if (customers.length > 0) {
        status = 200;
      } else {
        status = 204;
      }

      res
        .status(status)
        .json({ customers });
    } catch (error) {
      status = 500;
      res
        .status(status)
        .json({ message: 'Internal Server Error' });
    }
  };
  
  controller.createCustomer = async (req, res) => {
    try {
      const customers = await Customers.create(req.body);

      res
        .status(201)
        .json({ customers });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: 'Internal Server Error' });
    }
  };

  return controller;
}