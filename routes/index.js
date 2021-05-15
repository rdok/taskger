const { registerApiRoutes } = require("./api");
const { registerWebRoutes } = require("./web");

const registerRoutes = (app) => {
  registerApiRoutes(app);
  registerWebRoutes(app);
};

module.exports = { registerRoutes };
