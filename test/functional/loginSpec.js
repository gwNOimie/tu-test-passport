var config = require("../../nightwatch.conf");

module.exports = {
  'Login test if username and password are incorrect': function (client) {
    client
      .url('http://localhost:3000/login')
      .setValue('input[name="email"]', 'test@example.com')
      .setValue('input[name="password"]', 'test')
      .click('input[type="submit"]')
      .assert.urlEquals('http://localhost:3000/login')
      .end();
  },

  'Login test if username is incorrect': function (client) {
    client
      .url('http://localhost:3000/login')
      .setValue('input[name="email"]', 'test@wrong.com')
      .setValue('input[name="password"]', 'test')
      .click('input[type="submit"]')
      .assert.urlEquals('http://localhost:3000/login')
      .end();
  },

  'Login test if password is incorrect': function (client) {
    client
      .url('http://localhost:3000/login')
      .setValue('input[name="email"]', 'test@example.com')
      .setValue('input[name="password"]', 'wrong')
      .click('input[type="submit"]')
      .assert.urlEquals('http://localhost:3000/login')
      .end();
  },

  'Login test if username and password are empty': function (client) {
    client
      .url('http://localhost:3000/login')
      .setValue('input[name="email"]', '')
      .setValue('input[name="password"]', '')
      .click('input[type="submit"]')
      .assert.urlEquals('http://localhost:3000/login')
      .end();
  },

  'Login test if username is empty': function (client) {
    client
      .url('http://localhost:3000/login')
      .setValue('input[name="email"]', '')
      .setValue('input[name="password"]', 'test')
      .click('input[type="submit"]')
      .assert.urlEquals('http://localhost:3000/login')
      .end();
  },

  'Login test if password is empty': function (client) {
    client
      .url('http://localhost:3000/login')
      .setValue('input[name="email"]', 'test@example.com')
      .setValue('input[name="password"]', '')
      .click('input[type="submit"]')
      .assert.urlEquals('http://localhost:3000/login')
      .end();
  },

  /*'Login test username and password are correct': function (client) {
    client
      .url('http://localhost:3000/login')
      .setValue('input[name="email"]', 'test@example.com')
      .setValue('input[name="password"]', 'test')
      .click('input[type="submit"]')
      .assert.urlEquals('http://localhost:3000/profile')
      .end();
  },*/
};