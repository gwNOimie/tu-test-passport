var config = require("../../nightwatch.conf");

module.exports = {
  'Signup test if lastname is empty': function (client) {
    client
      .url('http://localhost:3000/signup')
      .setValue('input[name="lastname"]', '')
      .setValue('input[name="firstname"]', 'John')
      .setValue('input[name="nickname"]', 'jrambo')
      .setValue('input[name="email"]', 'john.rambo@rocky.tld')
      .setValue('input[name="password"]', 'p@ssword')
      .setValue('input[name="password_confirm"]', 'p@ssword')
      .setValue('input[name="birthdate"]', '06/07/1946')
      .click('input[type="submit"]')
      .assert.urlEquals('http://localhost:3000/signup')
      .end();
  },

  'Signup test if firstname is empty': function (client) {
    client
    .url('http://localhost:3000/signup')
    .setValue('input[name="lastname"]', 'RAMBO')
    .setValue('input[name="firstname"]', '')
    .setValue('input[name="nickname"]', 'jrambo')
    .setValue('input[name="email"]', 'john.rambo@rocky.tld')
    .setValue('input[name="password"]', 'p@ssword')
    .setValue('input[name="password_confirm"]', 'p@ssword')
    .setValue('input[name="birthdate"]', '06/07/1946')
    .click('input[type="submit"]')
    .assert.urlEquals('http://localhost:3000/signup')
    .end();
  },

  'Signup test if nickname is empty': function (client) {
    client
    .url('http://localhost:3000/signup')
    .setValue('input[name="lastname"]', 'RAMBO')
    .setValue('input[name="firstname"]', 'John')
    .setValue('input[name="nickname"]', '')
    .setValue('input[name="email"]', 'john.rambo@rocky.tld')
    .setValue('input[name="password"]', 'p@ssword')
    .setValue('input[name="password_confirm"]', 'p@ssword')
    .setValue('input[name="birthdate"]', '06/07/1946')
    .click('input[type="submit"]')
    .assert.urlEquals('http://localhost:3000/signup')
    .end();
  },

  'Signup test if email is empty': function (client) {
    client
    .url('http://localhost:3000/signup')
    .setValue('input[name="lastname"]', 'RAMBO')
    .setValue('input[name="firstname"]', 'John')
    .setValue('input[name="nickname"]', 'jrambo')
    .setValue('input[name="email"]', '')
    .setValue('input[name="password"]', 'p@ssword')
    .setValue('input[name="password_confirm"]', 'p@ssword')
    .setValue('input[name="birthdate"]', '06/07/1946')
    .click('input[type="submit"]')
    .assert.urlEquals('http://localhost:3000/signup')
    .end();
  },

  'Signup test if password is empty': function (client) {
    client
    .url('http://localhost:3000/signup')
    .setValue('input[name="lastname"]', 'RAMBO')
    .setValue('input[name="firstname"]', 'John')
    .setValue('input[name="nickname"]', 'jrambo')
    .setValue('input[name="email"]', 'john.rambo@rocky.tld')
    .setValue('input[name="password"]', '')
    .setValue('input[name="password_confirm"]', 'p@ssword')
    .setValue('input[name="birthdate"]', '06/07/1946')
    .click('input[type="submit"]')
    .assert.urlEquals('http://localhost:3000/signup')
    .end();
  },

  'Signup test if confirm password is empty': function (client) {
    client
    .url('http://localhost:3000/signup')
    .setValue('input[name="lastname"]', 'RAMBO')
    .setValue('input[name="firstname"]', 'John')
    .setValue('input[name="nickname"]', 'jrambo')
    .setValue('input[name="email"]', 'john.rambo@rocky.tld')
    .setValue('input[name="password"]', 'p@ssword')
    .setValue('input[name="password_confirm"]', '')
    .setValue('input[name="birthdate"]', '06/07/1946')
    .click('input[type="submit"]')
    .assert.urlEquals('http://localhost:3000/signup')
    .end();
  },

  'Signup test if confirm birthdate is empty': function (client) {
    client
    .url('http://localhost:3000/signup')
    .setValue('input[name="lastname"]', 'RAMBO')
    .setValue('input[name="firstname"]', 'John')
    .setValue('input[name="nickname"]', 'jrambo')
    .setValue('input[name="email"]', 'john.rambo@rocky.tld')
    .setValue('input[name="password"]', 'p@ssword')
    .setValue('input[name="password_confirm"]', 'p@ssword')
    .setValue('input[name="birthdate"]', '')
    .click('input[type="submit"]')
    .assert.urlEquals('http://localhost:3000/signup')
    .end();
  },
};