import { expect, test } from 'vitest';

const data = {
  email: 'matheus@gmail.com',
  name: 'matheus',
  age: 16,
};

test('It should sum', () => {
  expect(2 + 2).toBe(4);
});

test('It should be negative', () => {
  expect(2 + 3).toBe(5);
});

test('It should...', () => {
  expect(data.age).toBe(16);
});
