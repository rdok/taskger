const express = require("express");

const router = new express.Router();

router.all("/api/*", (req, res) => {
  return res.status(404).json({ status: 404, error: "Not Found" });
});

module.exports = router;
