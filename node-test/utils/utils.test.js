const utils = require('./utils');

it('should add two number', () => {
  let result = utils.add(10, 10);
  if (result !== 20) {
    throw new Error(`Expected 20 but found ${result}`);
  }
});

it('should square the number', () => {
  let result = utils.square(10);
  if (result != 100) {
    throw new Error(`Expected 100 but found ${result}`);
  }
})
