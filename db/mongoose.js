const mongoose = require("mongoose");
const { TaskSchema, UserSchema } = require("./schemas");

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_MAIN } = process.env;
const username = encodeURIComponent(DB_USER);
const password = encodeURIComponent(DB_PASSWORD);

const uri = `mongodb://${username}:${password}@${DB_HOST}:${DB_PORT}/${DB_MAIN}`;
console.log(uri);

mongoose
  .connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .finally(() => {
    mongoose.connection.close();
  });

const User = mongoose.model("User", UserSchema);
const Task = mongoose.model("Task", TaskSchema);

module.exports = { User, Task };
