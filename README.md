# Reverse Polish Notation Calculator

This is a Javascript/Node.js command line reverse Polish notation (RPN) calculator that supports addition, subtraction, multiplication, and division. For more information on using RPN, see this article: http://www-stone.ch.cam.ac.uk/documentation/rrf/rpn.html.

In order to use the calculator, clone this repository to your local machine:
> git clone https://github.com/mvdlippe/rpncalc.git

Use npm to install all dependencies (right now it's just Jest, for testing, but could be updated in the future):
> npm install

Start the calculator:
> npm start

From there, you can use it like a standard RPN calculator. It supports adding numbers and operators one at a time:

> \> 3
> 
> 3
> 
> \> 4
> 
> 4
> 
> \> \+
> 
> 7

or adding an entire expression at once, separated by spaces:
> \> 3 4 +
> 
> 7

If you're planning to add new features to the calculator, I would recommend a test driven approach. You can run the current test suite with: 
> npm test

Any tests should be added to the \_\_tests__ folder, which will automatically add them to the test suite.

# Technical Reasoning

The calculator functions (both math operations and the core functions) are split into modular services for enhanced code readability, upgradability, and testability. This simplifies and standardizes the process of adding new features (like new operators), changing functionality (say, if I decided that addition should behave differently), and fixing bugs. 

I was initially running into some issues with snychronously waiting for user input from stdin using readline and considered using a package called readline-sync to solve the issue, but I found a solution on Stack Overflow that said wrapping the response from readline in a promise would allow the execution to pause to wait for user input. I chose to implement the promise based approach to limit the number of external dependencies required to use the calculator, so it should continue to function barring a major update to JS builtins.

I chose Jest as my testing library for its rich feature set and its extremely lexical code - it's simple to understand how a test functions just by reading it.

# To-do

The next thing I would probably add is support for exponentiation and modulo division. I'd also likely add some integration tests if I were going to spend some additional time on this project, but I don't think they're strictly necessary. Readline, the main component that would be tested by an integration test, already has great test coverage, as it is a built in feature of Node.js. The other functions are largely already covered by tests I wrote, and it's simple to verify that entering 'q' exits the calculator by using the calculator.

Converting the calculator to TypeScript could also be useful - the method I use for emptying arrays in the event of errors or running out of numbers to operate on is relatively inefficient (O(n)), but I preferred to use it rather than writing over the array (O(1)) to safeguard against type-mismatch errors. Since TS enforces strict typing, this wouldn't be an issue. Overall though, the size of the arrays that would be typically used by this calculator aren't so large that the time complexity of the inefficient approach would matter much.
