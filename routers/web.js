const express = require("express");

const router = new express.Router();

router.get("/", (req, res) => res.render("index", { title: "Taskger" }));
router.get("/about", (req, res) => res.render("about", { title: "About" }));
router.get("*", (req, res) => res.render("error", { title: "Not Found" }));

module.exports = router;
