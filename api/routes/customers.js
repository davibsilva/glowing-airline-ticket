module.exports = app => {
  const controller = app.controllers.customers;

  app.route('/api/v1/customers')
    .get(controller.listCustomers);
  
  app.route('/api/v1/customers')
    .post(controller.createCustomer);
};
