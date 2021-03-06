const mongoose = require("mongoose");

const Task = mongoose.model("Task", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["completed", "todo", "doing"],
  },
  // description: {
  //   type: String,
  //   trim: true,
  // },
  // createdBy: {
  //   type: String,
  //   required: true,
  //   trim: true,
  // },
});

module.exports = { Task };
