const request = require("supertest");

const app = require("../../app");

it("validates required fields", (done) => {
  let error = "User validation failed";
  error += ": password: Path `password` is required.";
  error += ", email: Path `email` is required.";
  error += ", name: Path `name` is required.";

  request(app)
    .post("/api/users")
    .send()
    .expect(422, { status: 422, error })
    .end(done);
});

it("validates invalid emals", (done) => {
  let error = "User validation failed";
  error += ": email: Invalid email: 'invalid-email'";

  request(app)
    .post("/api/users")
    .send({ email: "invalid-email", name: "ValidName", password: "ValidPass" })
    .expect(422, { status: 422, error })
    .end(done);
});
