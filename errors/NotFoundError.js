class NotFoundError extends Error {
  constructor(...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    if (params.length === 0) {
      super("The specified resource does not exist.");
    } else {
      super(...params);
    }

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NotFoundError);
    }

    this.name = NotFoundError.name;
    this.date = new Date();
  }
}

module.exports = { NotFoundError };
