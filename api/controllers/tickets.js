module.exports = app => {
  
  const { Tickets } = require('../models');

  const controller = {};

  controller.listTickets = async (req, res) => {
    try {
      const tickets = await Tickets.findAll();
      var status;

      if (tickets.length > 0) {
        status = 200;
      } else {
        status = 204;
      }

      res
        .status(status)
        .json({ tickets });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: 'Internal Server Error' });
    }
  };
  
  controller.createTicket = async (req, res) => {
    const { FlightSeats } = require('../models');
    const { flightId, flightSeatId } = req.body;
    
    try {
      const alreadyFilledSeat = await FlightSeats.findOne({
        where: {
          id: flightSeatId,
          flightId: flightId,
          filled: true
        }
      });

      if (alreadyFilledSeat) {
        res
          .status(409)
          .json({ message: 'Assento já oculpado!' });
      } else {

        const tickets = await Tickets.create(req.body);

        await FlightSeats.update(
          { filled: true },
          {
            where: {
              flightId: flightId,
              id: flightSeatId,
            },
          }
        );

        res.status(201).json({ tickets });
      }
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: 'Internal Server Error' });
    }
  };

  return controller;
}