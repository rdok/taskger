const TaskSchema = {
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
