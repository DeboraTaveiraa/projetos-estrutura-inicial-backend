const restify = require("restify");

const HelloController = require("./controllers/hello");

const server = restify.createServer();

HelloController.routes(server);

server.listen(process.env.SERVER_PORT, () => {
  console.log("Servidor rodando em: ", server.url);
});
