const mongoose = require("mongoose");
const { UserSchema, TaskSchema } = require("./schemas");

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_MAIN } = process.env;
const username = encodeURIComponent(DB_USER);
const password = encodeURIComponent(DB_PASSWORD);

const uri = `mongodb://${username}:${password}@${DB_HOST}:${DB_PORT}/${DB_MAIN}`;

mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const User = mongoose.model("User", UserSchema);
const Task = mongoose.model("Task", TaskSchema);

module.exports = { mongoose, User, Task };
