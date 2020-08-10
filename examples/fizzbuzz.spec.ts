import fc from 'fast-check';
import { fizzbuzz } from './src/lazyfizzbuzz';

describe('fizzbuzz', () => {

  it('multiple of 3 should contains Fizz', () => {
    fc.assert(
      fc.property(fc.integer(), (data) => {
        expect(fizzbuzz(data * 3)).toContain('Fizz');
      })
    );
  });

  it('multiple of 5 should contains Buzz', () => {
    fc.assert(
      fc.property(fc.integer(), (data) => {
        expect(fizzbuzz(data * 5)).toContain('Buzz');
      })
    );
  });

  it('multiple of 3 and 5 should be FizzBuzz', () => {
    fc.assert(
      fc.property(fc.integer(), (data) => {
        expect(fizzbuzz(data * 3 * 5)).toEqual('FizzBuzz');
      })
    );
  });


});
