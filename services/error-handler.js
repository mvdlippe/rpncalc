const errorHandler = (message, funcName) => {
  return new Error(`Error occurred in ${funcName}: ${message}`);
}

module.exports = errorHandler;
