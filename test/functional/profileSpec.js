const config = require("../../nightwatch.conf");
const helper = require('./test-helper')

module.exports = {
  'Profile page show displays user informations ': function (client) {
    client
      .url('http://localhost:3000/login')
      .getValue('input[name="lastname"]').assert.equal('RAMBO')
      .getValue('input[name="firstname"]').assert.equal('John')
      .getValue('input[name="nickname"]').assert.equal('jrambo')
      .getValue('input[name="email"]').assert.equal('john.rambo@rocky.tld')
      .getValue('input[name="password"]').assert.equal('p@ssword')
      .getValue('input[name="password_confirm"]').assert.equal('p@ssword')
      .getValue('input[name="birthdate"]').assert.equal('06/07/1946')
      .end();
  },

  'Profile update ': function (client) {
    client
    .url('http://localhost:3000/signup')
    .setValue('input[name="lastname"]', 'THERON')
    .setValue('input[name="firstname"]', 'Charlize')
    .setValue('input[name="nickname"]', 'ctheron')
    .setValue('input[name="email"]', 'john.rambo@rocky.tld')
    .setValue('input[name="password"]', '123456')
    .setValue('input[name="password_confirm"]', '123456')
    .setValue('input[name="birthdate"]', ' 07/08/1975')
    .setValue('input[name="gender"]', 'Woman')
    .setValue('input[name="presentation"]', 'Atomic Blonde')
    .setValue('input[name="picture"]', 'https://fr.wikipedia.org/wiki/Charlize_Theron#/media/File:Charlize_Theron_Cannes_2015_2.jpg')
    .click('input[type="submit"]')
    .assert.urlEquals('http://localhost:3000/profile')
    .getValue('input[name="lastname"]').assert.equal('THERON')
    .getValue('input[name="firstname"]').assert.equal('Charlize')
    .getValue('input[name="nickname"]').assert.equal('ctheron')
    .getValue('input[name="email"]').assert.equal('john.rambo@rocky.tld')
    .getValue('input[name="password"]').assert.equal('123456')
    .getValue('input[name="password_confirm"]').assert.equal('123456')
    .getValue('input[name="birthdate"]').assert.equal('07/08/1975')
    .getValue('input[name="gender"]').assert.equal('Woman')
    .getValue('input[name="presentation"]').assert.equal('Atomic Blonde')
    .getValue('input[name="picture"]').assert.equal('https://fr.wikipedia.org/wiki/Charlize_Theron#/media/File:Charlize_Theron_Cannes_2015_2.jpg')
    .end();
  },
};