const { registerExpressError } = require("../registerExpressError");
const { Task } = require("../../db/mongoose");

const registerTaskRoutes = (app) => {
  app.get("/api/tasks", async (req, res, next) => {
    registerExpressError(async () => {
      const tasks = await Task.find({});
      return res.json({ data: tasks });
    });
  });

  app.post("/api/tasks", async (req, res, next) => {
    registerExpressError(async () => {
      const task = await new Task({
        ...req.body,
        // name: "AlphaTask",
        // status: "todo",
        // createdBy: new ObjectId(user._id),
      }).save();
      return res.status(201).send(task);
    });
  });

  app.patch("/api/tasks/:_id", async (req, res, next) => {
    registerExpressError(async () => {
      const id = req.params._id;
      const task = await Task.updateOne({ _id: id }, { ...req.body });

      return res.status(200).send(task);
    });
  });

  app.delete("/api/tasks/:_id", async (req, res, next) => {
    registerExpressError(async () => {
      const id = req.params.id;
      const task = await Task.deleteOne({ _id: id });

      return res.status(204).send(task);
    });
  });
};

module.exports = { registerTaskRoutes };
