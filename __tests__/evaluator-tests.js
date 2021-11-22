const { describe, expect, it } = require('@jest/globals');
const evaluate = require('../services/evaluate');

describe('Tests for the evaluate function:', () => {
  it('Returns an error and empties passed in arrays if an invalid operator is passed in', () => {
    const numbers = [1, 2];
    const operators = ['r'];
    const answer = evaluate(numbers, operators);
    expect(answer).toBeInstanceOf(Error);
    expect(numbers.length).toEqual(0);
    expect(operators.length).toEqual(0);
    
    const numbers2 = [1, 2, 3, 4];
    const operators2 = ['+', '-', null];
    const answer2 = evaluate(numbers2, operators2);
    expect(answer2).toBeInstanceOf(Error);
    expect(numbers2.length).toEqual(0);
    expect(operators2.length).toEqual(0);
  });

  it('Returns an error and empties passed in arrays if a math function returns an error', () => {
    const numbers = [4, 0];
    const operators = ['/'];
    const answer = evaluate(numbers, operators);
    expect(answer).toBeInstanceOf(Error);
    expect(numbers.length).toEqual(0);
    expect(operators.length).toEqual(0);
  });

  it('Evaluates one math operation', () => {
    const numbers = [3, 4];
    const operators = ['+'];
    evaluate(numbers, operators);
    expect(numbers.length).toEqual(1);
    expect(numbers[0]).toEqual(7);
    expect(operators.length).toEqual(0);
  });

  it('Evaluates multiple math operations', () => {
    const numbers = [5, 4, 3, 2, 1];
    const operators = ['+', '/', '-', '*'];
    evaluate(numbers, operators);
    expect(numbers.length).toEqual(1);
    expect(numbers[0]).toEqual(15);
    expect(operators.length).toEqual(0);
  });

  it('Stores numbers if fewer than (numbers - 1) operators are passed in, evaluating each operator', () => {
    const numbers = [5, 4, 3, 2, 1];
    const operators = ['+'];
    evaluate(numbers, operators);
    expect(numbers.length).toEqual(4);
    expect(numbers[0]).toEqual(5);
    expect(numbers[1]).toEqual(4);
    expect(numbers[2]).toEqual(3);
    expect(numbers[3]).toEqual(3);
    expect(operators.length).toEqual(0);
  });
});
