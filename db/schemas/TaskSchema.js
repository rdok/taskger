const TaskSchema = {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  createdBy: {
    type: String,
    required: true,
    trim: true,
  },
};

module.exports = { TaskSchema };
