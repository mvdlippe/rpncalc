const { describe, expect, it } = require('@jest/globals');
const add = require('../services/math-ops/add');
const subtract = require('../services/math-ops/subtract');
const multiply = require('../services/math-ops/multiply');
const divide = require('../services/math-ops/divide');

describe('Tests for math operators:', () => {
  describe('Add', () => {
    it('Adds two numbers', () => {
      const answer = add(1, 2);
      expect(answer).not.toBeInstanceOf(Error);
      expect(answer).toEqual(3);
    });

    it('Returns an error if either argument is not a number', () => {
      const answer = add('r', 2);
      expect(answer).toBeInstanceOf(Error);
      const answer2 = add(1, null);
      expect(answer2).toBeInstanceOf(Error);
    });
  });

  describe('Subtract', () => {
    it('Subtracts second argument from first argument', () => {
      const answer = subtract(1, 2);
      expect(answer).not.toBeInstanceOf(Error);
      expect(answer).toEqual(-1);
    });

    it('Returns an error if either argument is not a number', () => {
      const answer = subtract('r', 2);
      expect(answer).toBeInstanceOf(Error);
      const answer2 = subtract(1, null);
      expect(answer2).toBeInstanceOf(Error);
    });
  });

  describe('Multiply', () => {
    it('Multiplies two numbers together', () => {
      const answer = multiply(4, 2);
      expect(answer).not.toBeInstanceOf(Error);
      expect(answer).toEqual(8);
    });

    it('Returns an error if either argument is not a number', () => {
      const answer = multiply('r', 2);
      expect(answer).toBeInstanceOf(Error);
      const answer2 = multiply(1, null);
      expect(answer2).toBeInstanceOf(Error);
    });
  });

  describe('Divide', () => {
    it('Divides first argument by second argument', () => {
      const answer = divide(4, 2);
      expect(answer).not.toBeInstanceOf(Error);
      expect(answer).toEqual(2);
    });

    it('Returns an error if dividing by zero', () => {
      const num1 = 4;
      const num2 = 0;
      const answer = divide(num1, num2);
      expect(answer).toBeInstanceOf(Error);
      expect(answer.message).toEqual(`Error occurred in divide: Warning: can't divide by zero: arg 1: ${num1}, arg 2: ${num2}`)
    });

    it('Returns an error if either argument is not a number', () => {
      const answer = multiply('r', 2);
      expect(answer).toBeInstanceOf(Error);
      const answer2 = multiply(1, null);
      expect(answer2).toBeInstanceOf(Error);
    });
  });
});
