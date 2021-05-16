function registerWebRoutes(app) {
  app.get("/", (req, res) => res.render("index", { title: "Taskger" }));
  app.get("/about", (req, res) => res.render("about", { title: "About" }));
  app.get("*", (req, res) => res.render("error", { title: "Not Found" }));
}

module.exports = { registerWebRoutes };
