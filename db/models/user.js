const validator = require("validator");
const mongoose = require("mongoose");

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: (value) => {
      const error = `Invalid email: '${value}'`;
      if (!validator.isEmail(value)) throw new Error(error);
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 7,
    validate: (value) => {
      const error = `Password cannot contain ${value}`;
      if (value === "password") throw new Error(error);
    },
  },
  // age: {
  //   type: Number,
  // },
});

module.exports = { User };
