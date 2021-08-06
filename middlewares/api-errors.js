const ValidationError = require("mongoose/lib/error/validation");

const { BadRequestError, NotFoundError } = require("../errors");

module.exports = (err, req, res, next) => {
  if (err instanceof BadRequestError)
    return res.status(422).json({ status: 422, error: err.message });

  if (err instanceof ValidationError)
    return res.status(422).json({ status: 422, error: err.message });

  if (err instanceof NotFoundError)
    return res.status(404).json({ status: 404, error: err.message });

  console.error("==================================================");
  console.error("UNEXPECTED_SERVER_ERROR", err);
  console.error("==================================================");
  return res.status(500).json({ status: 500, error: "Internal Server Error." });
};
