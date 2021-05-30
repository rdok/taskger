const { User } = require("../../db/models/user");

module.exports = (app) => {
  app.post("/api/users", async (req, res, next) => {
    try {
      const user = await new User({
        ...req.body,
      }).save();

      return res.status(201).send(user);
    } catch (e) {
      return next(e);
    }
  });
};
