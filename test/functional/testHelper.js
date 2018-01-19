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
  birthdate: '06/07/1946',
  gender: 'Man',
  presentation: 'C’était pas ma guerre !',
  picture: 'http://www.commeaucinema.com/images/news_insert/undefined_5f78fa28d7b69bad68a06423235295fd.jpg'
}

module.exports.querySelectors = {
  lastName: 'input[name="lastname"]',
  firstName: 'input[name="firstname"]',
  nickName: 'input[name="nickname"]',
  email: 'input[name="email"]',
  password: 'input[name="password"]',
  password_confirm: 'input[name="password_confirm"]',
  birthdate: 'input[name="birthdate"]',
  gender: 'select[name=gender]',
  presentation: 'textarea[name=presentation]',
  picture: 'textarea[name=picture]',
  submitButton: 'input[type="submit"]'
}

