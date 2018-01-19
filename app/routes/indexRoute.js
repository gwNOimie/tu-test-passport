const IndexController = require('../controllers/indexController')

module.exports = function(app, passport) {
  const indexController = new IndexController(app, passport);

  app.get('/', indexController.getHome.bind(indexController));

  app.get('/login', indexController.getLogin.bind(indexController));

  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile',
    failureRedirect : '/login',
    failureFlash : true
  }));

  app.get('/signup', indexController.getSignup.bind(indexController));

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile',
    failureRedirect : '/signup',
    failureFlash : true
  }));

  app.get('/profile', indexController.getProfile.bind(indexController));

  app.post('/profile', indexController.postProfile.bind(indexController));

  app.get('/logout', indexController.getLogout.bind(indexController));

  app.get('/auth/:provider', (req, res) => {
    throw new Error(`Authentication with external provider ${req.params.provider} not yet implemented`)
  })

  app.get('/auth/:provider/callback', (req, res) => {
    throw new Error(`Authentication with external provider ${req.params.provider} not yet implemented`)
  })
};

