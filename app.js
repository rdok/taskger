const path = require("path");
const express = require("express");
const hbs = require("hbs");
const apiUserRouter = require("./routers/api/user");
const apiTaskRouter = require("./routers/api/tasks");
const apiNotFoundRouter = require("./routers/api/not-found");
const webRouter = require("./routers/web");
const apiErrorsMiddleware = require("./middlewares/api-errors");

const app = express();

const publicDirPath = path.join(__dirname, "./public");
const partialsDirPath = path.join(__dirname, "./views/partials");

app.set("view engine", "hbs");

hbs.registerPartials(partialsDirPath);
hbs.registerHelper("date", () => new Date());

app.use(express.static(publicDirPath));
app.use(express.json());

require("./db/connect");

app.use(apiUserRouter);
app.use(apiTaskRouter);
app.use(apiNotFoundRouter);
app.use(webRouter);

app.use("/api/*", apiErrorsMiddleware);

module.exports = app;
