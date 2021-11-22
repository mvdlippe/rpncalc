const { describe, it, expect } = require('@jest/globals');
const errorHandler = require('../services/error-handler');

describe('Tests for error handler:', () => {
  it('Returns an error in the expected format', () => {
    const message = 'Hello!';
    const funcName = 'tests';
    const newError = errorHandler(message, funcName);
    expect(newError).toBeInstanceOf(Error);
    expect(newError.message).toEqual(`Error occurred in ${funcName}: ${message}`);
  });
});
