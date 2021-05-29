const { User } = require("../../db/mongoose");

module.exports = (app) => {
  app.post("/api/users", async (req, res, next) => {
    const user = await new User({
      ...req.body,
    }).save();

    return res.status(201).send(user);
  });
};
