const express = require("express");

const { User } = require("../../db/models/user");

const router = new express.Router();

router.post("/api/users", async (req, res, next) => {
  try {
    const user = await new User({
      ...req.body,
    }).save();

    return res.status(201).send(user);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
