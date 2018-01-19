/*const config = require("../../nightwatch.conf");
const helper = require('./testHelper')

const testLogID = '[Profile test] '

module.exports = {
  [testLogID + 'show displays user informations ']: (client) => {
    client
      .url(helper.routes.profile)
      .getValue(helper.querySelectors.lastName).assert.equal(helper.user.lastName)
      .getValue(helper.querySelectors.firstName).assert.equal(helper.user.firstName)
      .getValue(helper.querySelectors.nickName).assert.equal(helper.user.nickName)
      .getValue(helper.querySelectors.email).assert.equal(helper.user.email)
      .getValue(helper.querySelectors.password).assert.equal(helper.user.password)
      .getValue(helper.querySelectors.password_confirm).assert.equal(helper.user.password_confirm)
      .getValue(helper.querySelectors.birthdate).assert.equal(helper.user.birthdate)
      .end();
  },

  'Profile update ': function (client) {
    client
    .url('http://localhost:3000/signup')
    .setValue(helper.querySelectors.lastName, 'THERON')
    .setValue(helper.querySelectors.firstName, 'Charlize')
    .setValue(helper.querySelectors.nickName, 'ctheron')
    .setValue(helper.querySelectors.email, 'john.rambo@rocky.tld')
    .setValue(helper.querySelectors.password, '123456')
    .setValue(helper.querySelectors.password_confirm, '123456')
    .setValue(helper.querySelectors.birthdate, ' 07/08/1975')
    .setValue(helper.querySelectors.gender, 'Woman')
    .setValue(helper.querySelectors.presentation, 'Atomic Blonde')
    .setValue(helper.querySelectors.picture, 'https://fr.wikipedia.org/wiki/Charlize_Theron#/media/File:Charlize_Theron_Cannes_2015_2.jpg')
    .click('input[type="submit"]')
    .assert.urlEquals('http://localhost:3000/profile')
    .getValue(helper.querySelectors.lastName).assert.equal('THERON')
    .getValue(helper.querySelectors.firstName).assert.equal('Charlize')
    .getValue(helper.querySelectors.nickName).assert.equal('ctheron')
    .getValue(helper.querySelectors.email).assert.equal('john.rambo@rocky.tld')
    .getValue(helper.querySelectors.password).assert.equal('123456')
    .getValue(helper.querySelectors.password_confirm).assert.equal('123456')
    .getValue(helper.querySelectors.birthdate).assert.equal('07/08/1975')
    .getValue(helper.querySelectors.gender).assert.equal('Woman')
    .getValue(helper.querySelectors.presentation).assert.equal('Atomic Blonde')
    .getValue(helper.querySelectors.picture).assert.equal('https://fr.wikipedia.org/wiki/Charlize_Theron#/media/File:Charlize_Theron_Cannes_2015_2.jpg')
    .end();
  },
};*/