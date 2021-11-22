const readline = require('readline');
const errorHandler = require('./services/error-handler');
const parser = require('./services/parser');
const evaluate = require('./services/evaluate');

// numbers contains most recent numbers input from the command line, operator contains the math operator to use
const numbers = [];
const operators = [];

const main = async () => {
  // Run until user wants to quit
  while (true) {
    // readline interface setup
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    // Synchronously wait for user input
    const input = await new Promise(resolve => {
      rl.question('> ', resolve);
    });

    // Quit if the user inputs q
    if (input === 'q') {
      console.log('Quitting...');
      process.exit();
    }

    // Split the input to a parseable array, then iteratively parse and evaluate expressions
    const inputArr = input.split(' ');
    while (inputArr.length) {
      parser(inputArr, numbers, operators);
      evaluate(numbers, operators);
    }

    // Log the answer, close the readline interface
    console.log(numbers[numbers.length - 1]);
    rl.close();

    // Clear out any remaining operators
    while (operators.length) operators.pop();
  }
}

main();
