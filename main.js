const app = require("./app");
const { mongoose } = require("./db/mongoose");

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
const username = encodeURIComponent(DB_USER);
const password = encodeURIComponent(DB_PASSWORD);
const normalisedPort = DB_PORT ? `:${DB_PORT}` : "";
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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening http://localhost:${PORT}`);
});
