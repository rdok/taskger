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

it("validates invalid emails", (done) => {
  let error = "User validation failed";
  error += ": email: Invalid email: 'invalid-email'";

  request(app)
    .post("/api/users")
    .send({ email: "invalid-email", name: "ValidName", password: "ValidPass" })
    .expect(422, { status: 422, error })
    .end(done);
});

it("validates invalid short password", (done) => {
  const error =
    "User validation failed: password: " +
    "Path `password` (`i`) is shorter than the minimum allowed length (7).";

  request(app)
    .post("/api/users")
    .send({ email: "valid@emailc.om", name: "ValidName", password: "i" })
    .expect(422, { status: 422, error })
    .end(done);
});

it("validates invalid common password", (done) => {
  const error =
    "User validation failed: password: Password cannot contain password";

  request(app)
    .post("/api/users")
    .send({ email: "valid@emailc.om", name: "ValidName", password: "password" })
    .expect(422, { status: 422, error })
    .end(done);
});
