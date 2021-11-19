const parser = (inputStr, numbers, operators) => {
  // Split the string on spaces
  const inputArr = inputStr.split(' ');

  // Parse through inputArr and add stuff into the number or operator storage
  inputArr.forEach((element) => {
    // Use type coercion to convert string numbers to numbers, skipping over the operators which become NaNs
    if (typeof +element === 'number' && !isNaN(+element)) {
      // Add to numbers
      numbers.push(+element);
    } else if (typeof element === 'string') {
      // Add to operators
      operators.push(element);
    }
  });

  return;
}
