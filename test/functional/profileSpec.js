const config = require("../../nightwatch.conf");
const helper = require('./testHelper')

const testLogID = '[Profile test] '

module.exports = {
  [testLogID + 'show displays user informations ']: (client) => {
    client
      .url(helper.routes.profile)
      .assert(helper.querySelectors.lastName, helper.user.lastName)
      .assert(helper.querySelectors.firstName, helper.user.firstName)
      .assert(helper.querySelectors.nickName, helper.user.nickName)
      .assert(helper.querySelectors.email, helper.user.email)
      .assert(helper.querySelectors.password, helper.user.password)
      .assert(helper.querySelectors.password_confirm, helper.user.password)
      .assert(helper.querySelectors.birthdate, helper.user.birthdate)
      .end();
  },
};