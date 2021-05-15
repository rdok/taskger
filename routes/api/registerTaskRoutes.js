const { Task } = require("../../db/mongoose");

const registerTaskRoutes = (app) => {
  app.get("/api/tasks", async (req, res, next) => {
    try {
      const tasks = await Task.find({});
      return res.json({ data: tasks });
    } catch (e) {
      return next(e);
    }
  });
};

module.exports = { registerTaskRoutes };
