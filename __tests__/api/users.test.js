const request = require("supertest");
const { makeUser } = require("../../jest/userMaker");

const app = require("../../app");
const { User } = require("../../db/mongoose");
jest.mock("../../db/mongoose");

it("creates a user", (done) => {
  const body = makeUser();
  const expectedUser = { ...body, _id: "user-to-create-id" };
  const save = jest.fn().mockResolvedValueOnce(expectedUser);
  User.mockReturnValueOnce({ save });

  request(app)
    .post("/api/users")
    .send(body)
    .expect(201, expectedUser)
    .expect(() => {
      expect(User).toHaveBeenCalledWith(body);
      expect(save).toHaveBeenCalled();
    })
    .end(done);
});
