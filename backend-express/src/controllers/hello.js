const HelloController = {
  routes(server) {
    server.get("/hello/:name", this.respond);
  },
  respond(request, response) {
    try {
      const { name } = request.params;
      let text = "";

      setTimeout(() => {
        text = `Hello, ${name}!`;

        response.send(text);
      }, 1000);
    } catch (error) {
      response.send(error);
      next();
    }
  },
};

module.exports = HelloController;
