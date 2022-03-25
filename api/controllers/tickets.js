module.exports = app => {
  
  const { Tickets, Flights } = require('../models');

  const controller = {};

  controller.listTickets = async (req, res) => {
    try {
      const tickets = await Tickets.findAll();

      if (tickets.length == 0) {
        res.status(204)
          .send();
        return;
      }
      
      res.status(200).json({ tickets });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  controller.getTicket = async (req, res) => {
    const { id } = req.params;

    try {
      const ticket = await Tickets.findOne({
        where: {
          id
        }
      });

      if (!ticket) {
        res.status(404).json({ message: 'Passagem não encontrada' });
        return;
      }

      const { flightId } = ticket.dataValues;

      const flight = await Flights.findOne({
        where: {
          id: flightId,
        },
      });

      ticket.dataValues.flight = flight;

      res.status(200).json({ ticket })

    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

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
        res.status(400).json({ message: 'Assento já ocupado!' });
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
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  return controller;
}