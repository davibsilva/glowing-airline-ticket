module.exports = app => {
  
  const { Airports } = require('../models');
  const { Op } = require('sequelize');

  const controller = {};

  controller.listAirports = async (req, res) => {
    try {
      const airports = await Airports.findAll();

      if (airports.length == 0) {
        res.status(204).send();
        return;
      }

      res.status(200).json({ airports });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  controller.createAirport = async (req, res) => {
    const { name } = req.body;

    try {
      var airport = await Airports.findOne({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          }
        },
      });

      if (airport) {
        res.status(400).json({ message: 'Aeroporto já existe' });
        return;
      }

      airport = await Airports.create(req.body);

      res.status(201).json({ airports: airport });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  return controller;
}