const request = require("supertest");

const app = require("../../app");

it("validates required fields", (done) => {
  let error = "Task validation failed";
  error += ": status: Path `status` is required.";
  error += ", name: Path `name` is required.";

  request(app)
    .post("/api/tasks")
    .send()
    .expect(422, { status: 422, error })
    .end(done);
});

it("validates status value", (done) => {
  let error = "Task validation failed: ";
  error +=
    "status: `InvalidValue` is not a valid enum value for path `status`.";

  request(app)
    .post("/api/tasks")
    .send({ name: "TaskName", status: "InvalidValue" })
    .expect(422, { status: 422, error })
    .end(done);
});
