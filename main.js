const readline = require('readline');
const add = require('./services/add');
const subtract = require('./services/subtract');
const multiply = require('./services/multiply');
const divide = require('./services/divide');
const errorHandler = require('./services/error-handler');
const parser = require('./services/parser');

// storage contains most recent numbers input from the command line, operator contains the math operator to use
const numbers = [];
const operators = [];

// Call the appropriate math function
const compute = (operator, num1, num2) => {
  if (operator === '+') {
    return add(num1, num2);
  } else if (operator === '-') {
    return subtract(num1, num2);
  } else if (operator === '*') {
    return multiply(num1, num2);
  } else if (operator === '/') {
    return divide(num1, num2);
  } else {
    return errorHandler('Invalid operator', 'main');
  }
}

// Print to the command line


// Wait for user input
const waitForInput = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('', (input) => {
    if (input === 'q') {
      process.exit();
    }
    
    parser(input);
    rl.close();
  });
}

waitForInput();
