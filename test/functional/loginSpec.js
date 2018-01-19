const helper = require('./testHelper')

module.exports = {
  'Login test if username and password are incorrect': function (client) {
    client
      .url(helper.routes.login)
      .setValue(helper.querySelectors.email, 'test@example.com')
      .setValue(helper.querySelectors.password, 'test')
      .click(helper.querySelectors.submitButton)
      .assert.urlEquals(helper.routes.login)
      .end();
  },

  'Login test if username is incorrect': function (client) {
    client
      .url(helper.routes.login)
      .setValue(helper.querySelectors.email, 'test@wrong.com')
      .setValue(helper.querySelectors.password, 'test')
      .click(helper.querySelectors.submitButton)
      .assert.urlEquals(helper.routes.login)
      .end();
  },

  'Login test if password is incorrect': function (client) {
    client
      .url(helper.routes.login)
      .setValue(helper.querySelectors.email, 'test@example.com')
      .setValue(helper.querySelectors.password, 'wrong')
      .click(helper.querySelectors.submitButton)
      .assert.urlEquals(helper.routes.login)
      .end();
  },

  'Login test if username and password are empty': function (client) {
    client
      .url(helper.routes.login)
      .setValue(helper.querySelectors.email, '')
      .setValue(helper.querySelectors.password, '')
      .click(helper.querySelectors.submitButton)
      .assert.urlEquals(helper.routes.login)
      .end();
  },

  'Login test if username is empty': function (client) {
    client
      .url(helper.routes.login)
      .setValue(helper.querySelectors.email, '')
      .setValue(helper.querySelectors.password, 'test')
      .click(helper.querySelectors.submitButton)
      .assert.urlEquals(helper.routes.login)
      .end();
  },

  'Login test if password is empty': function (client) {
    client
      .url(helper.routes.login)
      .setValue(helper.querySelectors.email, 'test@example.com')
      .setValue(helper.querySelectors.password, '')
      .click(helper.querySelectors.submitButton)
      .assert.urlEquals(helper.routes.login)
      .end();
  },

  /*'Login test username and password are correct': function (client) {
    client
      .url(helper.routes.login)
      .setValue(helper.querySelectors.email, 'test@example.com')
      .setValue(helper.querySelectors.password, 'test')
      .click(helper.querySelectors.submitButton)
      .assert.urlEquals('http://localhost:3000/profile')
      .end();
  },*/
};