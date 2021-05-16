const mongoose = require("mongoose");
const { UserSchema, TaskSchema } = require("./schemas");

const User = mongoose.model("User", UserSchema);
const Task = mongoose.model("Task", TaskSchema);

module.exports = { mongoose, User, Task };
