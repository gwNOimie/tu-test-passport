const domain = 'http://localhost:3000/'
module.exports.routes = {
  signup: domain + 'signup',
  login: domain + 'login',
  profile: domain + 'profile'
}

module.exports.user = {
  lastName: 'RAMBO',
  firstName: 'John',
  nickName: 'jrambo',
  email: 'john.rambo@rocky.tld',
  password: 'p@ssword',
  birthdate: '06/07/1946'
}

module.exports.querySelectors = {
  lastName: 'input[name="lastname"]',
  firstName: 'input[name="firstname"]',
  nickName: 'input[name="nickname"]',
  email: 'input[name="email"]',
  password: 'input[name="password"]',
  password_confirm: 'input[name="password_confirm"]',
  birthdate: 'input[name="birthdate"]',
  submitButton: 'input[type="submit"]'
}

