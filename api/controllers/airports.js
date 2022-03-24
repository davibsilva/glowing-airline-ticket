module.exports = app => {
  
  const { Airports } = require('../models');

  const controller = {};

  controller.listAirports = async (req, res) => {
    try {
      const airports = await Airports.findAll();
      var status;

      if (airports.length > 0) {
        status = 200;
      } else {
        status = 204;
      }

      res
        .status(status)
        .json({ airports });
    } catch (error) {
      status = 500;
      res
        .status(status)
        .json({ message: 'Internal Server Error' });
    }
  };
  
  controller.createAirport = async (req, res) => {
    try {
      const airports = await Airports.create(req.body);

      res
        .status(201)
        .json({ airports });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: 'Internal Server Error' });
    }
  };

  return controller;
}