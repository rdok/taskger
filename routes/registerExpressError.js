const registerExpressError = (callback) => {
  try {
    return callback();
  } catch (e) {
    return next(e);
  }
};

module.exports = { registerExpressError };
