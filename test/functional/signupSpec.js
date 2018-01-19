const config = require('../../nightwatch.conf')
const helper = require('./testHelper')

const testLogID = '[Signup test] '

module.exports = {
  ['' + testLogID + 'if lastname is empty']: (client) => {
    client
      .url(helper.routes.signup)
      .setValue(helper.querySelectors.lastName, '')
      .setValue(helper.querySelectors.firstName, helper.user.firstName)
      .setValue(helper.querySelectors.nickName, helper.user.nickName)
      .setValue(helper.querySelectors.email, helper.user.email)
      .setValue(helper.querySelectors.password, helper.user.password)
      .setValue(helper.querySelectors.password_confirm, helper.user.password)
      .setValue(helper.querySelectors.birthdate, helper.user.birthdate)
      .setValue(helper.querySelectors.gender, helper.user.gender)
      .setValue(helper.querySelectors.presentation, helper.user.presentation)
      .setValue(helper.querySelectors.picture, helper.user.picture)
      .click(helper.querySelectors.submitButton)
      .assert.urlEquals(helper.routes.signup)
      .end()
  },

  ['' + testLogID + 'if firstname is empty']: (client) => {
    client
    .url(helper.routes.signup)
    .setValue(helper.querySelectors.lastName, helper.user.lastName)
    .setValue(helper.querySelectors.firstName, '')
    .setValue(helper.querySelectors.nickName, helper.user.nickName)
    .setValue(helper.querySelectors.email, helper.user.email)
    .setValue(helper.querySelectors.password, helper.user.password)
    .setValue(helper.querySelectors.password_confirm, helper.user.password)
    .setValue(helper.querySelectors.birthdate, helper.user.birthdate)
    .setValue(helper.querySelectors.gender, helper.user.gender)
    .setValue(helper.querySelectors.presentation, helper.user.presentation)
    .setValue(helper.querySelectors.picture, helper.user.picture)
    .click(helper.querySelectors.submitButton)
    .assert.urlEquals(helper.routes.signup)
    .end();
  },

  ['' + testLogID + 'if nickname is empty']: (client) => {
    client
    .url(helper.routes.signup)
    .setValue(helper.querySelectors.lastName, helper.user.lastName)
    .setValue(helper.querySelectors.firstName, helper.user.firstName)
    .setValue(helper.querySelectors.nickName, '')
    .setValue(helper.querySelectors.email, helper.user.email)
    .setValue(helper.querySelectors.password, helper.user.password)
    .setValue(helper.querySelectors.password_confirm, helper.user.password)
    .setValue(helper.querySelectors.birthdate, helper.user.birthdate)
    .setValue(helper.querySelectors.gender, helper.user.gender)
    .setValue(helper.querySelectors.presentation, helper.user.presentation)
    .setValue(helper.querySelectors.picture, helper.user.picture)
    .click(helper.querySelectors.submitButton)
    .assert.urlEquals(helper.routes.signup)
    .end();
  },

  ['' + testLogID + 'if email is empty']: (client) => {
    client
    .url(helper.routes.signup)
    .setValue(helper.querySelectors.lastName, helper.user.lastName)
    .setValue(helper.querySelectors.firstName, helper.user.firstName)
    .setValue(helper.querySelectors.nickName, helper.user.nickName)
    .setValue(helper.querySelectors.email, '')
    .setValue(helper.querySelectors.password, helper.user.password)
    .setValue(helper.querySelectors.password_confirm, helper.user.password)
    .setValue(helper.querySelectors.birthdate, helper.user.birthdate)
    .setValue(helper.querySelectors.gender, helper.user.gender)
    .setValue(helper.querySelectors.presentation, helper.user.presentation)
    .setValue(helper.querySelectors.picture, helper.user.picture)
    .click(helper.querySelectors.submitButton)
    .assert.urlEquals(helper.routes.signup)
    .end();
  },

  ['' + testLogID + 'if password is empty']: (client) => {
    client
    .url(helper.routes.signup)
    .setValue(helper.querySelectors.lastName, helper.user.lastName)
    .setValue(helper.querySelectors.firstName, helper.user.firstName)
    .setValue(helper.querySelectors.nickName, helper.user.nickName)
    .setValue(helper.querySelectors.email, helper.user.email)
    .setValue(helper.querySelectors.password, '')
    .setValue(helper.querySelectors.password_confirm, helper.user.password)
    .setValue(helper.querySelectors.birthdate, helper.user.birthdate)
    .setValue(helper.querySelectors.gender, helper.user.gender)
    .setValue(helper.querySelectors.presentation, helper.user.presentation)
    .setValue(helper.querySelectors.picture, helper.user.picture)
    .click(helper.querySelectors.submitButton)
    .assert.urlEquals(helper.routes.signup)
    .end();
  },

  ['' + testLogID + 'if confirm password is empty']: (client) => {
    client
    .url(helper.routes.signup)
    .setValue(helper.querySelectors.lastName, helper.user.lastName)
    .setValue(helper.querySelectors.firstName, helper.user.firstName)
    .setValue(helper.querySelectors.nickName, helper.user.nickName)
    .setValue(helper.querySelectors.email, helper.user.email)
    .setValue(helper.querySelectors.password, helper.user.password)
    .setValue(helper.querySelectors.password_confirm, '')
    .setValue(helper.querySelectors.birthdate, helper.user.birthdate)
    .setValue(helper.querySelectors.gender, helper.user.gender)
    .setValue(helper.querySelectors.presentation, helper.user.presentation)
    .setValue(helper.querySelectors.picture, helper.user.picture)
    .click(helper.querySelectors.submitButton)
    .assert.urlEquals(helper.routes.signup)
    .end();
  },

  'Signup test if birthdate is empty': function (client) {
    client
    .url(helper.routes.signup)
    .setValue(helper.querySelectors.lastName, helper.user.lastName)
    .setValue(helper.querySelectors.firstName, helper.user.firstName)
    .setValue(helper.querySelectors.nickName, helper.user.nickName)
    .setValue(helper.querySelectors.email, helper.user.email)
    .setValue(helper.querySelectors.password, helper.user.password)
    .setValue(helper.querySelectors.password_confirm, helper.user.password)
    .setValue(helper.querySelectors.birthdate, '')
    .setValue(helper.querySelectors.gender, helper.user.gender)
    .setValue(helper.querySelectors.presentation, helper.user.presentation)
    .setValue(helper.querySelectors.picture, helper.user.picture)
    .click(helper.querySelectors.submitButton)
    .assert.urlEquals(helper.routes.signup)
    .end();
  }
}
