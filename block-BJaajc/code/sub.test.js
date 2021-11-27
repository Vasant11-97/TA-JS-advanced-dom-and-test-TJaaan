const sub = require('./sub');

test('Subtraction of 10 and 2 is 8', () => {
  expect(sub(10, 2)).toBe(8);
});

test('Subtraction of 10 and 2 is 8', () => {
  expect(sub(20, 2)).toBe(18);
});
