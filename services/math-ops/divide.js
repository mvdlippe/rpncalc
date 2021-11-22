const errorHandler = require('../error-handler');

const divide = (num1, num2) => {
  // Error protection for invalid number inputs
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    // Divide by zero protection
    if (num2 === 0) {
      return errorHandler(`Warning: can't divide by zero: arg 1: ${num1}, arg 2: ${num2}', 'divide`);
    }

    return num1 / num2;
  } else {
    return errorHandler(`Invalid input(s), not a number: arg1 ${num1}, arg2 ${num2}`, 'divide');
  }
}

module.exports = divide;
