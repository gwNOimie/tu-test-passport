

const helper = require('./testHelper')

const testLogID = '[Login test] '

module.exports = {
  [testLogID + 'if username and password are incorrect']: (client) => {
    client
      .url(helper.routes.login)
      .setValue(helper.querySelectors.email, 'test@example.com')
      .setValue(helper.querySelectors.password, 'test')
      .click(helper.querySelectors.submitButton)
      .assert.urlEquals(helper.routes.login)
      .end();
  },

  [testLogID + 'if username is incorrect']: (client) => {
    client
      .url(helper.routes.login)
      .setValue(helper.querySelectors.email, 'test@wrong.com')
      .setValue(helper.querySelectors.password, 'test')
      .click(helper.querySelectors.submitButton)
      .assert.urlEquals(helper.routes.login)
      .end();
  },

  [testLogID + 'if password is incorrect']: (client) => {
    client
      .url(helper.routes.login)
      .setValue(helper.querySelectors.email, 'test@example.com')
      .setValue(helper.querySelectors.password, 'wrong')
      .click(helper.querySelectors.submitButton)
      .assert.urlEquals(helper.routes.login)
      .end();
  },

  [testLogID + 'if username and password are empty']: (client) => {
    client
      .url(helper.routes.login)
      .setValue(helper.querySelectors.email, '')
      .setValue(helper.querySelectors.password, '')
      .click(helper.querySelectors.submitButton)
      .assert.urlEquals(helper.routes.login)
      .end();
  },

  [testLogID + 'if username is empty']: (client) => {
    client
      .url(helper.routes.login)
      .setValue(helper.querySelectors.email, '')
      .setValue(helper.querySelectors.password, 'test')
      .click(helper.querySelectors.submitButton)
      .assert.urlEquals(helper.routes.login)
      .end();
  },

  [testLogID + 'if password is empty']: (client) => {
    client
      .url(helper.routes.login)
      .setValue(helper.querySelectors.email, 'test@example.com')
      .setValue(helper.querySelectors.password, '')
      .click(helper.querySelectors.submitButton)
      .assert.urlEquals(helper.routes.login)
      .end();
  },

  /*[testLogID + 'username and password are correct']: (client) => {
    client
      .url(helper.routes.login)
      .setValue(helper.querySelectors.email, 'test@example.com')
      .setValue(helper.querySelectors.password, 'test')
      .click(helper.querySelectors.submitButton)
      .assert.urlEquals('http://localhost:3000/profile')
      .end();
  },*/
};