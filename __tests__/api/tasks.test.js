const request = require("supertest");
const { makeTask } = require("../../jest/taskMaker");

const { Task } = require("../../db/models/task");
jest.mock("../../db/models/task");

const app = require("../../app");

it("fetches tasks", (done) => {
  const tasks = [makeTask()];
  Task.find.mockResolvedValueOnce(tasks);

  request(app)
    .get("/api/tasks")
    .expect(200, { data: tasks })
    .expect(() => {
      expect(Task.find).toHaveBeenCalled();
    })
    .end(done);
});

it("fetches a task", (done) => {
  const task = { ...makeTask(), _id: "task-to-fetch-uuid" };
  Task.findById.mockResolvedValueOnce(task);

  request(app)
    .get(`/api/tasks/${task._id}`)
    .expect(() => {
      expect(Task.findById).toHaveBeenCalledWith(task._id);
    })
    .expect(200, { data: task })
    .end(done);
});

it("stores a task", (done) => {
  const body = makeTask();
  const expectedTask = { ...body, _id: "task-to-create-id" };
  const save = jest.fn().mockResolvedValueOnce(expectedTask);
  Task.mockReturnValue({ save });

  request(app)
    .post("/api/tasks")
    .send(body)
    .expect(201, expectedTask)
    .expect(() => {
      expect(Task).toHaveBeenCalledWith(body);
      expect(save).toHaveBeenCalled();
    })
    .end(done);
});

it("updates a task", (done) => {
  const task = { ...makeTask(), _id: "task-to-update-uuid" };
  const updatedTask = { ...task, name: "updated-value" };
  Task.updateOne.mockResolvedValueOnce(updatedTask);

  request(app)
    .patch(`/api/tasks/${task._id}`)
    .send(updatedTask)
    .expect(200, updatedTask)
    .expect(() => {
      expect(Task.updateOne).toHaveBeenCalledWith(
        { _id: task._id },
        { ...updatedTask }
      );
    })
    .end(done);
});

it("deletes a task", (done) => {
  const task = { ...makeTask(), _id: "task-to-delete-uuid" };
  Task.deleteOne.mockResolvedValueOnce({ deleteCount: 1 });

  request(app)
    .delete(`/api/tasks/${task._id}`)
    .expect(200, { deleteCount: 1 })
    .expect(() => {
      expect(Task.deleteOne).toHaveBeenCalledWith({ _id: task._id });
    })
    .end(done);
});

it("should handle non existent task fetch", (done) => {
  Task.findById.mockResolvedValueOnce(null);
  const error = "The specified resource does not exist.";

  request(app)
    .get(`/api/tasks/invalid-id`)
    .expect(404, { status: 404, error })
    .end(done);
});
