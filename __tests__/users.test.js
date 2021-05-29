const request = require("supertest");
const { makeUser } = require("../jest/userMaker");
const { User } = require("../db/mongoose");

jest.mock("../db/mongoose");

const app = require("../app");

describe("Users API", () => {
  it("stores a user", (done) => {
    const body = makeUser();
    const expectedUser = { ...body, _id: "user-to-create-id" };
    const save = jest.fn().mockResolvedValue(expectedUser);
    User.mockReturnValue({ save });

    request(app)
      .post("/api/users")
      .send(body)
      .expect(201, expectedUser)
      .expect(() => {
        expect(save).toHaveBeenCalled();
      })
      .end(done);
  });
});
