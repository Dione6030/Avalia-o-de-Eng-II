const sum = require('./calculator').sum;
const div = require('./calculator').div;

test('É esperado a soma de 2 numeros', () => {
  expect(sum(2, 3)).toBe(5);
});

test('É esperado a divisão de 2 numeros', () => {
  expect(div(10, 2)).toBe(5);
});