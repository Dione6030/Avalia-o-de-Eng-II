const sum = require('./calculator').sum;
const square = require('./calculator').square;

test('É esperado a soma de 2 numeros', () => {
  expect(sum(2, 3)).toBe(5);
});

test('É esperado a raiz quadrada de um numero', () => {
  expect(square(9)).toBe(3);
});