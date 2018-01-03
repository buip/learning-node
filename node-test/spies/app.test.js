const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {
  let bd = {
    saveUser: expect.createSpy()
  }

  app.__set__('db', bd);
  it('should call the spy correctly', () => {
    let spy = expect.createSpy();
    spy('Phuong', 25);
    expect(spy).toHaveBeenCalledWith('Phuong', 25);
  });

  it('should call saveUser with user object', () => {
    let email = 'buip@beloit.edu';
    let password = 'password';
    app.handleSignup(email, password);
    expect(bd.saveUser).toHaveBeenCalledWith({email,password});
  });
});
