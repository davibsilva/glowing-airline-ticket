module.exports = app => {
  
  const { Flights, Tickets } = require('../models');

  const controller = {};

  controller.listFlights = async (req, res) => {
    try {
      const flights = await Flights.findAll();

      if (flights.length == 0) {
        res.status(204).send();
        return;
      }

      res.status(200).json({ flights });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  controller.listFlightAvailableSeats = async (req, res) => {
    const { FlightSeats } = require('../models');

    try {
      const availableSeatsFlightIdList = (await FlightSeats.findAll({
        attributes: ['flightId'],
        where: {
          filled: false
        },
        group: 'flightId'
      })).map(flightSeat => {
        return flightSeat.dataValues.flightId;
      });

      const flights = await Flights.findAll({
        where: {
          id: availableSeatsFlightIdList,
        },
      });

      const availableSeats = await FlightSeats.findAll({
        where: {
          filled: false,
          flightId: availableSeatsFlightIdList
        },
      });
      
      if (flights.length > 0) {
        flights.map(flight => {
          flight.dataValues.availableSeats = [];

          for (const availableSeat of availableSeats) {
            const flightId = availableSeat.dataValues.flightId

            if (flight.dataValues.id == flightId) {
              flight.dataValues.availableSeats.push(availableSeat);
            }
          }
        });

        res.status(200).json({ flights });
      } else {
        res.status(204).send();
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  controller.listFlightTickets = async(req, res) => {
    const { id } = req.params;

    try {
      const flight = await Flights.findOne({
        where: {
          id
        }
      });

      if (!flight) {
        res.status(404).json({ message: 'Voo não encontrado' });
        return;
      }

      const flightTickets = await Tickets.findAll({
        where: {
          flightId: id
        }
      });

      flight.dataValues.tickets = flightTickets;

      res.status(200).json({ flight })
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  controller.createFlight = async (req, res) => {
    const { FlightSeats } = require('../models');

    try {
      const flights = await Flights.create(req.body);
      const totalSeats = flights.totalSeats;

      for (let index = 1; index <= totalSeats; index++) {        
        await FlightSeats.create({
          flightId: flights.id,
          seatNumber: index
        });
      }

      res.status(201).json({ flights });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  return controller;
}