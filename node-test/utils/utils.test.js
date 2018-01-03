const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
  describe('#async', () => {
    it('should async add two numbers', (done) => {
      utils.asyncAdd(1, 2, (sum) => {
        expect(sum).toBe(3).toBeA('number');
        done()
      });
    });
    it('should async square two number', (done) => {
      utils.asyncSquare(10, (result) => {
        expect(result).toBe(100).toBeA('number');
        done();
      });
    });
  });
  it('should add two number', () => {
    let result = utils.add(10, 10);
    expect(result).toBe(20).toBeA('number');
  });
});

it('should verify first and last name are set', () => {
  let user = {
    age: 25
  };
  let result = utils.setName({}, 'Phuong Bui');
  let resultTwo = utils.setName(user, 'Phuong Bui');
  let finalResult = result.firstName + ' ' + result.lastName;
  expect(finalResult).toBe('Phuong Bui');
  expect(user).toInclude({
    firstName: 'Phuong',
    lastName: 'Bui'
  });
});


it('should square the number', () => {
  let result = utils.square(10);
  expect(result).toBe(100).toBeA('number');
});

it('should expect some value', () => {
  expect(12).toNotBe(13);
  expect({
    name: 'Phuong'
  }).toEqual({
    name: 'Phuong'
  });
  expect([1,2,3]).toInclude(2);
  expect({
    name: 'Phuong',
    age: 20
  }).toInclude({
    age: 20
  })
});
