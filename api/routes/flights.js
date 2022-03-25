module.exports = app => {
  const controller = app.controllers.flights;

  app.route('/api/v1/flights')
    .get(controller.listFlights);
  
  app.route('/api/v1/flights/:id/tickets')
    .get(controller.listFlightTickets)
  
  app.route('/api/v1/flights/seats')
    .get(controller.listFlightAvailableSeats);
  
  app.route('/api/v1/flights')
    .post(controller.createFlight);
};
