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
      if (!validator.isEmail(value))
        throw new Error(`Invalid email: '${value}'`);
    },
  },
  age: {
    type: Number,
  },
};

module.exports = { UserSchema };
