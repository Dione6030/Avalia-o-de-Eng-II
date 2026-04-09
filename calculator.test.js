const sum = require('./calculator').sum;

test('É esperado a soma de 2 numeros', () => {
  expect(sum(2, 3)).toBe(5);
});
