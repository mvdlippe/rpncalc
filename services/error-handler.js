const errorHandler = (message, func) => {
  return new Error(`Error occurred in ${func}: ${message}`);
}

export default errorHandler;
