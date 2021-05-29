const faker = require("faker");

const makeUser = () => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

module.exports = { makeUser };
