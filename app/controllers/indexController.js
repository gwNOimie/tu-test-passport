class IndexController {
  constructor(passport) {
    this.passport = passport;
  }

  index(req, res) {
    res.render('home');
  }

  loginPage(req, res) {
    console.log('loginPage')
    res.render('login'/*, { message: req.flash('error') || null }*/)
  }

  loginAction(req, res) {
    console.log(req.body)
    console.log('loginAction')
    console.log(this.passport)
    // this.passport.authenticate('local', {
    //   successRedirect: '/',
    //   failureRedirect: '/login',
    //   failureFlash: true
    // })
  }

  auth(req, res) {
    return null;
  }

  registerPage(req, res) {
    res.render('register')
  }

  register(req, res) {
    console.log(req.body)
    const newUser = {
      lastname: req.body.lastname,
      firstname: req.body.firstname,
      email: req.body.email,
      pseudo: req.body.pseudo,
      birthdate: req.body.birthdate
    }
    return newUser;
  }

  logout(req, res) {
    return null;
  }
}

module.exports = IndexController;