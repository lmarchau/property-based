import { fizzbuzz } from './src/lazyfizzbuzz';

describe('fizzbuzz', () => {
  it('Should 1 be undefined', () => {
    expect(fizzbuzz(1)).toBeUndefined();
  });
  it('Should 3 be Fizz', () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });
  it('Should 5 be Buzz', () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });
  it('Should 9 be Fizz', () => {
    expect(fizzbuzz(9)).toEqual("Fizz");
  });
  it('Should 15 be FizzBuzz', () => {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
  });
  it('Should 25 be Buzz', () => {
    expect(fizzbuzz(25)).toEqual("Buzz");
  });
});
