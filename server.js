const app = require("./config/express")();
const port = app.get("port");

// RODANDO NOSSA APLICAÇÃO NA PORTA SETADA
app.listen(port, () => {
  console.log(`Server runnig on port: ${port}`);
});
