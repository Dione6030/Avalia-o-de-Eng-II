const sum = require('./calculator').sum;
const mult = require('./calculator').mult;

test('É esperado a soma de 2 numeros', () => {
  expect(sum(2, 3)).toBe(5);
});

test('É esperado a multiplicação de 2 numeros', () => {
  expect(mult(2, 3)).toBe(6);
});