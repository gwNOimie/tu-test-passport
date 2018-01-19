const config = require("../../nightwatch.conf");
const helper = require('./test-helper')


module.exports = {
  'Signup test if lastname is empty': function (client) {
    client
      .url(helper.routes.signup)
      .setValue(helper.querySelectors.lastName, '')
      .setValue(helper.querySelectors.firstName, helper.user.firstName)
      .setValue(helper.querySelectors.nickName, helper.user.nickName)
      .setValue(helper.querySelectors.email, helper.user.email)
      .setValue(helper.querySelectors.password, helper.user.password)
      .setValue(helper.querySelectors.password_confirm, helper.user.password)
      .setValue(helper.querySelectors.birthdate, helper.user.birthdate)
      .click(helper.querySelectors.submitButton)
      .assert.urlEquals(helper.routes.signup)
      .end();
  },

  'Signup test if firstname is empty': function (client) {
    client
    .url(helper.routes.signup)
    .setValue(helper.querySelectors.lastName, helper.user.lastName)
    .setValue(helper.querySelectors.firstName, '')
    .setValue(helper.querySelectors.nickName, helper.user.nickName)
    .setValue(helper.querySelectors.email, helper.user.email)
    .setValue(helper.querySelectors.password, helper.user.password)
    .setValue(helper.querySelectors.password_confirm, helper.user.password)
    .setValue(helper.querySelectors.birthdate, helper.user.birthdate)
    .click(helper.querySelectors.submitButton)
    .assert.urlEquals(helper.routes.signup)
    .end();
  },

  'Signup test if nickname is empty': function (client) {
    client
    .url(helper.routes.signup)
    .setValue(helper.querySelectors.lastName, helper.user.lastName)
    .setValue(helper.querySelectors.firstName, helper.user.firstName)
    .setValue(helper.querySelectors.nickName, '')
    .setValue(helper.querySelectors.email, helper.user.email)
    .setValue(helper.querySelectors.password, helper.user.password)
    .setValue(helper.querySelectors.password_confirm, helper.user.password)
    .setValue(helper.querySelectors.birthdate, helper.user.birthdate)
    .click(helper.querySelectors.submitButton)
    .assert.urlEquals(helper.routes.signup)
    .end();
  },

  'Signup test if email is empty': function (client) {
    client
    .url(helper.routes.signup)
    .setValue(helper.querySelectors.lastName, helper.user.lastName)
    .setValue(helper.querySelectors.firstName, helper.user.firstName)
    .setValue(helper.querySelectors.nickName, helper.user.nickName)
    .setValue(helper.querySelectors.email, '')
    .setValue(helper.querySelectors.password, helper.user.password)
    .setValue(helper.querySelectors.password_confirm, helper.user.password)
    .setValue(helper.querySelectors.birthdate, helper.user.birthdate)
    .click(helper.querySelectors.submitButton)
    .assert.urlEquals(helper.routes.signup)
    .end();
  },

  'Signup test if password is empty': function (client) {
    client
    .url(helper.routes.signup)
    .setValue(helper.querySelectors.lastName, helper.user.lastName)
    .setValue(helper.querySelectors.firstName, helper.user.firstName)
    .setValue(helper.querySelectors.nickName, helper.user.nickName)
    .setValue(helper.querySelectors.email, helper.user.email)
    .setValue(helper.querySelectors.password, '')
    .setValue(helper.querySelectors.password_confirm, helper.user.password)
    .setValue(helper.querySelectors.birthdate, helper.user.birthdate)
    .click(helper.querySelectors.submitButton)
    .assert.urlEquals(helper.routes.signup)
    .end();
  },

  'Signup test if confirm password is empty': function (client) {
    client
    .url(helper.routes.signup)
    .setValue(helper.querySelectors.lastName, helper.user.lastName)
    .setValue(helper.querySelectors.firstName, helper.user.firstName)
    .setValue(helper.querySelectors.nickName, helper.user.nickName)
    .setValue(helper.querySelectors.email, helper.user.email)
    .setValue(helper.querySelectors.password, helper.user.password)
    .setValue(helper.querySelectors.password_confirm, '')
    .setValue(helper.querySelectors.birthdate, helper.user.birthdate)
    .click(helper.querySelectors.submitButton)
    .assert.urlEquals(helper.routes.signup)
    .end();
  },

  'Signup test if confirm birthdate is empty': function (client) {
    client
    .url(helper.routes.signup)
    .setValue(helper.querySelectors.lastName, helper.user.lastName)
    .setValue(helper.querySelectors.firstName, helper.user.firstName)
    .setValue(helper.querySelectors.nickName, helper.user.nickName)
    .setValue(helper.querySelectors.email, helper.user.email)
    .setValue(helper.querySelectors.password, helper.user.password)
    .setValue(helper.querySelectors.password_confirm, helper.user.password)
    .setValue(helper.querySelectors.birthdate, '')
    .click(helper.querySelectors.submitButton)
    .assert.urlEquals(helper.routes.signup)
    .end();
  },
};