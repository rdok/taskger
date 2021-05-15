const { Task } = require("../db/mongoose");

jest.mock("../db/mongoose");

const request = require("supertest");
const app = require("../app");
const { makeTask } = require("../jest/taskMaker");

it("may fetch tasks", async () => {
  // given i have two tasks in the mongo db
  // const tasks = makeTasks(2);
  const tasks = [makeTask()];
  Task.find.mockResolvedValue(tasks);
  // mockDbTaskQuery(tasks);

  await request(app)
    .get("/api/tasks")
    .expect("Content-Type", /json/)
    .expect(200)
    .expect({ data: tasks });
});
