module.exports = app => {
  const controller = app.controllers.flights;

  app.route('/api/v1/flights')
    .get(controller.listFlights);
  
  app.route('/api/v1/flights')
    .post(controller.createFlight);
};
