// import errorHandler from "./error-handler.js";
const errorHandler = require('./error-handler');

const divide = (num1, num2) => {
  // Divide by zero protection
  if (num2 === 0) {
    return errorHandler('Warning: divide by zero', 'divide');
  }

  return num1 / num2;
}

module.exports = divide;
