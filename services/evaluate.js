const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
const errorHandler = require('./error-handler');

const evaluate = (numbers, operators) => {
  // While there are numbers and operators, evaluate expressions
  while (numbers.length > 1 && operators.length > 0) {
    // Pop off the last two entries from numbers, shift off the first entry from operators
    const num2 = numbers.pop();
    const num1 = numbers.pop();
    const currOp = operators.shift();
  
    // Feed these into evaluate and push the result back onto numbers
    const answer = performMathOp(num1, num2, currOp);
    numbers.push(answer);
  }
}

// Select and perform the appropriate math operation based on the passed in operator
const performMathOp = (num1, num2, operator) => {
  if (operator === '+') {
    return add(num1, num2);
  } else if (operator === '-') {
    return subtract(num1, num2);
  } else if (operator === '*') {
    return multiply(num1, num2);
  } else if (operator === '/') {
    return divide(num1, num2);
  } else {
    errorHandler(`Invalid operator "${operator}"`, 'main');
  }
}

module.exports = evaluate;
