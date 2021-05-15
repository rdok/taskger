const { registerTaskRoutes } = require("./api/registerTaskRoutes");
const { BadRequestError } = require("../errors/BadRequestError");

const registerApiRoutes = (app) => {
  registerTaskRoutes(app);

  app.get("/api/*", (req, res) =>
    res.status(404).json({ status: 404, error: "Not Found" })
  );

  app.use("/api/*", (err, req, res, next) => {
    if (err instanceof BadRequestError)
      return res.status(422).json({ status: 422, error: err.message });

    console.error(err);
    return res
      .status(500)
      .json({ status: 500, error: "Internal Server Error." });
  });
};

module.exports = { registerApiRoutes };
