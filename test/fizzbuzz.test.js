import {fizzBuzz} from "../src/fizzbuzz";

test('should return fizz on multiples of 3', () => {
  expect(fizzBuzz(3)).toBe('fizz');
  expect(fizzBuzz(6)).toBe('fizz');

});
test('should return fizz on multiples of 5', () => {
expect(fizzBuzz(5)).toBe('buzz');
expect(fizzBuzz(13)).toBe(13);
expect(fizzBuzz(15)).toBe('fizzbuzz');
});
test('should return fizz on multiples of 15', () => {
  expect(fizzBuzz(15)).toBe('fizzbuzz');

});
