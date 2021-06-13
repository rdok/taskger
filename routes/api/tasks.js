const { NotFoundError } = require("../../errors");
const { Task } = require("../../db/models/task");

module.exports = (app) => {
  app.get("/api/tasks", async (req, res, next) => {
    try {
      const tasks = await Task.find({});
      return res.json({ data: tasks });
    } catch (e) {
      return next(e);
    }
  });

  app.post("/api/tasks", async (req, res, next) => {
    try {
      const task = await new Task({ ...req.body }).save();

      return res.status(201).send(task);
    } catch (e) {
      return next(e);
    }
  });

  app.patch("/api/tasks/:_id", async (req, res, next) => {
    try {
      const id = req.params._id;
      const task = await Task.updateOne({ _id: id }, { ...req.body });

      return res.status(200).send(task);
    } catch (e) {
      return next(e);
    }
  });

  app.get("/api/tasks/:id", async (req, res, next) => {
    try {
      const id = req.params.id;
      const task = await Task.findById(id);

      if (!task) throw new NotFoundError();
      return res.json({ data: task });
    } catch (e) {
      return next(e);
    }
  });

  app.delete("/api/tasks/:_id", async (req, res, next) => {
    try {
      const id = req.params._id;
      const response = await Task.deleteOne({ _id: id });

      const error = `Unable to find task resource with _id: ${id}`;
      if (response.deletedCount === 0) throw new NotFoundError(error);

      return res.status(200).send(response);
    } catch (e) {
      return next(e);
    }
  });
};
