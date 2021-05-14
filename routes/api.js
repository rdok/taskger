const { BadRequestError } = require("./BadRequestError");

const apiRoutes = (app) => {
  app.get("/api/tasks", async (req, res, next) => {
    try {
      return res.json({ data: [] });
    } catch (e) {
      return next(e);
    }
  });

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

module.exports = { apiRoutes };
