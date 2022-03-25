module.exports = app => {
  
  const { Customers, Tickets } = require('../models');
  const { Op } = require('sequelize');
  const controller = {};

  controller.listCustomers = async (req, res) => {
    try {
      const customers = await Customers.findAll();

      if (customers.length == 0) {
        res.status(204).send();
        return;
      }

      res.status(200).json({ customers });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  controller.listCustomerTickets = async (req, res) => {
    const { id } = req.params;

    try {
      const customer = await Customers.findOne({
        where: {
          id
        }
      });

      if (!customer) {
        res.status(404).json({ message: 'Cliente não encontrado' });
        return;
      }

      const customerTickets = await Tickets.findAll({
        where: {
          customerId: id
        }
      });

      customer.dataValues.tickets = customerTickets;

      res.status(200).json({ customer })
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  
  controller.createCustomer = async (req, res) => {
    const { name, fullName, email, cpf } = req.body;

    try {
      var customer = await Customers.findOne({
        where: {
          [Op.or]: [
            {
              email: {
                [Op.eq]: email
              }
            },
            {
              cpf: {
                [Op.eq]: cpf
              }
            }
          ]
        }
      });

      if (customer) {
        res.status(400).json({ message: 'Cliente já existe' });
        return;
      }

      customer = await Customers.create(req.body);

      res.status(201).json({ customers: customer });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  return controller;
}