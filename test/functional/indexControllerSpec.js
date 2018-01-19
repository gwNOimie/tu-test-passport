var config = require("../../nightwatch.conf");

module.exports = {
  'Login test if username and password are incorrect': function (client) {
    client
      .url('http://localhost:3000/login')
      ///.waitForElementVisible('input[name=email]')
      .setValue('input[name="email"]', 'test@example.com')
      //.waitForElementVisible('input[name=password]',200)
      .setValue('input[name="password"]', 'p@ssword')
      //.waitForElementVisible('input[name="btn_submit"]', 2000)
      .click('input[type="submit"]')
      .assert.urlEquals('http://localhost:3000/login')
      .end();
  }
};