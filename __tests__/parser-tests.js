const { describe, expect, it } = require('@jest/globals');
const parser = require('../services/parser');

describe('Tests for the parser function:', () => {
  it('Puts numbers into the passed in numbers array', () => {
    const inputArr = [1, 2];
    const numbers = [];
    const operators = [];
    parser(inputArr, numbers, operators);
    expect(inputArr.length).toEqual(0);
    expect(numbers.length).toEqual(2);
    expect(numbers[0]).toEqual(1);
    expect(numbers[1]).toEqual(2);
    expect(operators.length).toEqual(0);
  });

  it('Puts strings into the passed in operators array', () => {
    const inputArr = ['+', '-', 'r'];
    const numbers = [];
    const operators = [];
    parser(inputArr, numbers, operators);
    expect(inputArr.length).toEqual(0);
    expect(numbers.length).toEqual(0);
    expect(operators.length).toEqual(3);
    expect(operators[0]).toEqual('+');
    expect(operators[1]).toEqual('-');
    expect(operators[2]).toEqual('r');
  });

  it('Parses numbers and strings into respective arrays when all numbers are before all strings', () => {
    const inputArr = [1, 2, 3, '*', '+'];
    const numbers = [];
    const operators = [];
    parser(inputArr, numbers, operators);
    expect(inputArr.length).toEqual(0);
    expect(numbers.length).toEqual(3);
    expect(numbers[0]).toEqual(1);
    expect(numbers[1]).toEqual(2);
    expect(numbers[2]).toEqual(3);
    expect(operators.length).toEqual(2);
    expect(operators[0]).toEqual('*');
    expect(operators[1]).toEqual('+');
  });

  it('Will leave values in inputArr if there are any numbers after the first string', () => {
    const inputArr = [1, 2, '*', 3, '+'];
    const numbers = [];
    const operators = [];
    parser(inputArr, numbers, operators);
    expect(inputArr.length).toEqual(2);
    expect(inputArr[0]).toEqual(3);
    expect(inputArr[1]).toEqual('+');
    expect(numbers.length).toEqual(2);
    expect(numbers[0]).toEqual(1);
    expect(numbers[1]).toEqual(2);
    expect(operators.length).toEqual(1);
    expect(operators[0]).toEqual('*');
  });

  it('Coerces numbers in a string format into number format', () => {
    const inputArr = ['1', '2'];
    const numbers = [];
    const operators = [];
    parser(inputArr, numbers, operators);
    expect(inputArr.length).toEqual(0);
    expect(numbers.length).toEqual(2);
    expect(numbers[0]).toBe(1);
    expect(numbers[1]).toBe(2);
    expect(operators.length).toEqual(0);
  });
});
