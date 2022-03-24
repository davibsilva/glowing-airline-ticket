module.exports = app => {
  const controller = app.controllers.airports;

  app.route('/api/v1/airports')
    .get(controller.listAirports);
  
  app.route('/api/v1/airports')
    .post(controller.createAirport);
};
