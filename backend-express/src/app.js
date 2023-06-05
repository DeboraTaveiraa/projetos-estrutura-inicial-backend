const express = require("express");

const HelloController = require('./controllers/hello')

const app = express();

HelloController.routes(app)

app.listen(process.env.SERVER_PORT, () => {
  console.log("Servidor rodando na porta: ", process.env.SERVER_PORT);
})
