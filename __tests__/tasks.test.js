const request = require("supertest");
const { makeTask } = require("../jest/taskMaker");
const { Task } = require("../db/mongoose");

jest.mock("../db/mongoose");

const app = require("../app");

describe("CRUD Tasks", () => {
  it("fetches tasks", (done) => {
    const tasks = [makeTask()];
    Task.find.mockResolvedValue(tasks);

    request(app)
      .get("/api/tasks")
      .expect(200, { data: tasks })
      .expect(() => {
        expect(Task.find).toHaveBeenCalled();
      })
      .end(done);
  });

  it("stores a task", (done) => {
    const body = makeTask();
    const expectedTask = { ...body, _id: "task-to-create-id" };
    const save = jest.fn().mockResolvedValue(expectedTask);
    Task.mockReturnValue({ save });

    request(app)
      .post("/api/tasks")
      .send(body)
      .expect(201, expectedTask)
      .expect(() => {
        expect(save).toHaveBeenCalled();
      })
      .end(done);
  });

  it("updates a task", (done) => {
    const task = { ...makeTask(), _id: "task-to-update-uuid" };
    const updatedTask = { ...task, name: "updated-value" };
    Task.updateOne.mockResolvedValue(updatedTask);

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
    Task.deleteOne.mockResolvedValue({ deleteCount: 1 });

    request(app)
      .delete(`/api/tasks/${task._id}`)
      .expect(200, { deleteCount: 1 })
      .expect(() => {
        expect(Task.deleteOne).toHaveBeenCalledWith({ _id: task._id });
      })
      .end(done);
  });
});
