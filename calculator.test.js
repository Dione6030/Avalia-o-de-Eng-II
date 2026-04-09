const sum = require('./calculator').sum;
const sub = require('./calculator').sub;

test('É esperado a soma de 2 numeros', () => {
  expect(sum(2, 3)).toBe(5);
});

test('É esperado a subtração de 2 numeros', () => {
  expect(sub(5, 3)).toBe(2);
});