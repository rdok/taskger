const mongoose = require("mongoose");

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
const username = encodeURIComponent(DB_USER);
const password = encodeURIComponent(DB_PASSWORD);
const normalisedPort = DB_PORT ? `:${DB_PORT}` : "";

// PROD: Cloud MongoDB database needs to be manually created.
//    See `DB_NAME` on heroku config var to find it out.
// PROD Update1: also it takes some minutes in order to start communication with Cloud MongoDB.
const normalisedSchema =
  process.env.NODE_ENV === "production" ? "mongodb+srv" : "mongodb";
const query =
  process.env.NODE_ENV === "production" ? "?retryWrites=true&w=majority" : "";
const uri = `${normalisedSchema}://${username}:${password}@${DB_HOST}${normalisedPort}/${DB_NAME}${query}`;

mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
