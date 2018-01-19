const config = require("../../nightwatch.conf");
const helper = require('./test-helper')

module.exports = {
  'Profile page show displays user informations ': function (client) {
    client
      .url('http://localhost:3000/profile')
      .assert('input[name="lastname"]', 'RAMBO')
      .assert('input[name="firstname"]', 'John')
      .assert('input[name="nickname"]', 'jrambo')
      .assert('input[name="email"]', 'john.rambo@rocky.tld')
      .assert('input[name="password"]', 'p@ssword')
      .assert('input[name="password_confirm"]', 'p@ssword')
      .assert('input[name="birthdate"]', '06/07/1946')
      .end();
  },
};