module.exports = app => {
  const controller = app.controllers.tickets;

  app.route('/api/v1/tickets')
    .get(controller.listTickets);
  
  app.route('/api/v1/tickets/:id')
    .get(controller.getTicket)
  
  app.route('/api/v1/tickets')
    .post(controller.createTicket);
};
