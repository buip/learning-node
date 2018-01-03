const db = require('./db.js');

module.exports.handleSignup = (email, password) => {
  //check if email already exists
  //save user to database
  db.saveUser({
    email,
    password
  });
  //send welcome email
}
