const add = require('./math-ops/add');
const subtract = require('./math-ops/subtract');
const multiply = require('./math-ops/multiply');
const divide = require('./math-ops/divide');
const errorHandler = require('./error-handler');

const evaluate = (numbers, operators) => {
  // While there are numbers and operators, evaluate expressions
  while (numbers.length > 1 && operators.length > 0) {
    // Pop off the last two entries from numbers, shift off the first entry from operators
    const num2 = numbers.pop();
    const num1 = numbers.pop();
    const currOp = operators.shift();
  
    // Feed these into evaluator. If an error is returned, clear numbers and operators and wait for more user input. If not, push the answer into numbers
    const answer = performMathOp(num1, num2, currOp);
    if (answer instanceof Error) {
      while (numbers.length) numbers.pop();
      while (operators.length) numbers.pop();
      console.log(answer);
    } else {
      numbers.push(answer);
    }
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
    return errorHandler(`Invalid operator "${operator}"`, 'main');
  }
}

module.exports = evaluate;
