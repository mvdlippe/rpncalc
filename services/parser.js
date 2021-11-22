const parser = (inputArr, numbers, operators) => {
  // Use type coercion to check for numbers, add them to numbers until an operator is encountered
  while (typeof +inputArr[0] === 'number' && !isNaN(+inputArr[0])) {
    numbers.push(+inputArr.shift());
  }

  // Once an operator is encountered, add them to operators until a number is encountered
  while (typeof inputArr[0] === 'string') {
    operators.push(inputArr.shift());
  }
  
  return;
}

module.exports = parser;
