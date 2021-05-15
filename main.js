const app = require("./app");
const { apiRoutes, webRoutes } = require("./routes");

apiRoutes(app);
webRoutes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening http://localhost:${PORT}`);
});
