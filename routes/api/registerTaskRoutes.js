const { NotFoundError } = require("../../errors/NotFoundError");
const { Task } = require("../../db/mongoose");

const registerTaskRoutes = (app) => {
  app.get("/api/tasks", async (req, res, next) => {
    const tasks = await Task.find({});
    return res.json({ data: tasks });
  });

  app.post("/api/tasks", async (req, res, next) => {
    const task = await new Task({
      ...req.body,
      // name: "AlphaTask",
      // status: "todo",
      // createdBy: new ObjectId(user._id),
    }).save();
    return res.status(201).send(task);
  });

  app.patch("/api/tasks/:_id", async (req, res, next) => {
    const id = req.params._id;
    const task = await Task.updateOne({ _id: id }, { ...req.body });

    return res.status(200).send(task);
  });

  app.delete("/api/tasks/:_id", async (req, res, next) => {
    const id = req.params._id;
    try {
      const response = await Task.deleteOne({ _id: id });

      const error = `Unable to find task resource with _id: ${id}`;
      if (response.deletedCount === 0) throw new NotFoundError(error);

      return res.status(200).send(response);
    } catch (e) {
      return next(e);
    }
  });
};

module.exports = { registerTaskRoutes };
