const validator = require("validator");

const UserSchema = {
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
  },
  // age: {
  //   type: Number,
  // },
};

module.exports = { UserSchema };
