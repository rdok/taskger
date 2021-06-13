class BadRequestError extends Error {
  constructor(...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    if (params.length === 0) {
      super("Client request error.");
    } else {
      super(...params);
    }

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BadRequestError);
    }

    this.name = BadRequestError.name;
    this.date = new Date();
  }
}

module.exports = { BadRequestError };
