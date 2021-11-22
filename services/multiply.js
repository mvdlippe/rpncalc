const errorHandler = require('./error-handler');

const multiply = (num1, num2) => {
  // Error protection for invalid number inputs
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 * num2;
  } else {
    return errorHandler(`Invalid input(s), not a number: arg1 ${num1}, arg2 ${num2}`, 'multiply');
  }
}

module.exports = multiply;
