const TesteController = {
  routes(server) {
    server.get("/hello/:name", this.respond);
  },
  respond(request, response, next) {
    try {
      const { name } = request.params;
      let text = "";

      setTimeout(() => {
        text = `Hello, ${name}!`;

        response.send(200, text);

        next();
      }, 1000);
    } catch (error) {
      response.send(error);
      next();
    }
  },
};

module.exports = TesteController;
