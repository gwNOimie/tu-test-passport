class IndexController {
  constructor(app, passport) {
    this.app = app;
    this.passport = passport;
  }

  isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      next(req, res);
    }
    res.redirect('/login');
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

  getLogout(req, res) {
    req.logout();
    res.redirect('/login');
  }
}
module.exports = IndexController;