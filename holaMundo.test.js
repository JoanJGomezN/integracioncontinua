const holaMundo = require('./holamundo');

test('Imprime Hola Mundo', () => {
  expect(holaMundo()).toBe('Hola Mundo');
});