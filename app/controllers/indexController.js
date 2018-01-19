class IndexController {
  constructor(app, passport, userModel) {
    this.app = app;
    this.passport = passport;
    this.userModel = userModel;
  }

  isLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
      res.redirect('/login');
    }
    else {
      next(req, res);
    }
  }

  getHome(req, res) {
    this.isLoggedIn(req, res, (req, res) => {
      res.render('home');
    })
  }

  getLogin(req, res) {
    res.render('login', { message: req.flash('loginMessage') });
  }

  getSignup(req, res) {
    res.render('signup', { message: req.flash('signupMessage') });
  }

  getProfile(req, res) {
    this.isLoggedIn(req, res, (req, res) => {
      res.render('profile', { user: req.user });
    })
  }

  postProfile(req, res) {
    throw new Error('Not yet implemented');
  }

  getLogout(req, res) {
    req.logout();
    res.redirect('/login');
  }
}
module.exports = IndexController;