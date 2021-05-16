const { Task } = require("../db/mongoose");
const request = require("supertest");
const { makeTask } = require("../jest/taskMaker");

jest.mock("../db/mongoose");

const app = require("../app");

describe("CRUD Tasks", () => {
  it("fetches tasks", async () => {
    const tasks = [makeTask()];
    Task.find.mockResolvedValue(tasks);

    const response = request(app).get("/api/tasks");

    await response.expect(200).expect({ data: tasks });
    expect(Task.find).toHaveBeenCalled();
  });

  it("stores a task", async () => {
    const task = makeTask();
    const taskToCreate = { ...task, _id: "task-to-create-id" };
    const taskModel = new Task();
    taskModel.save.mockResolvedValue(taskToCreate);

    const response = request(app).post("/api/tasks").send(task);

    await response.expect(201, taskToCreate);
    expect(taskModel.save).toHaveBeenCalled();
  });

  it("updates a task", async () => {
    const task = { ...makeTask(), _id: "task-to-update-uuid" };
    const updatedTask = { ...task, name: "updated-value" };
    Task.updateOne.mockResolvedValue(updatedTask);

    const response = request(app)
      .patch(`/api/tasks/${task._id}`)
      .send(updatedTask);

    await response.expect(200, updatedTask);
    expect(Task.updateOne).toHaveBeenCalledWith(
      { _id: task._id },
      { ...updatedTask }
    );
  });

  it("deletes a task", async () => {
    const task = { ...makeTask(), _id: "task-to-delete-uuid" };
    Task.deleteOne.mockResolvedValue({ deleteCount: 1 });

    const response = request(app).delete(`/api/tasks/${task._id}`);

    await response.expect(200, { deleteCount: 1 });
    expect(Task.deleteOne).toHaveBeenCalledWith({ _id: task._id });
  });
});
