const readline = require('readline');
const add = require('./services/add');
const subtract = require('./services/subtract');
const multiply = require('./services/multiply');
const divide = require('./services/divide');
const errorHandler = require('./services/error-handler');
const parser = require('./services/parser');

// numbers contains most recent numbers input from the command line, operator contains the math operator to use
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
    return errorHandler(`Invalid operator "${operator}"`, 'main');
  }
}

// Wait for user input
const waitForInput = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  await rl.question('', async (input) => {
    if (input === 'q') {
      process.exit();
    }

    parser(input, numbers, operators);
    rl.close();
  });
}

const main = async () => {
  // while (true) {
    // await waitForInput();
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    await rl.question('', async (input) => {
      if (input === 'q') {
        process.exit();
      }
  
      parser(input, numbers, operators);
      rl.close();

      // Run operations while there are numbers and operators to work with
      while (numbers.length > 1 && operators.length > 0) {
        // Pop off the last two entries from numbers, shift off the first entry from operators
        const num2 = numbers.pop();
        const num1 = numbers.pop();
        const currOp = operators.shift();
      
        // Feed these into compute and push the result back onto numbers
        const answer = compute(currOp, num1, num2);
        numbers.push(answer);
      }
      // Log the answer to CL
      console.log(numbers[numbers.length - 1]);
      // Clear out any remaining operators
      while (operators.length) operators.pop();
    });
    
  // }
}

main();
