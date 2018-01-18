const expect = require('expect');
const IndexController = require('../../app/controllers/indexController');

describe('indexController', () => {
  describe('#isLoggedIn', () => {
    it('Should redirect to login if not authenticated', () => {
      // arrange
      const app = {};
      const passport = {};
      const req = {
        isAuthenticated() {
          return false;
        }
      };
      const res = {
        redirect(target) {
          // assert
          expect(target).toBe('/login');
        }
      };
      const callback = (req, res) => {};
      const indexController = new IndexController(app, passport);
      // act
      indexController.isLoggedIn(req, res, callback)
    });
    it('Should enter in callback if authenticated', () => {
      // arrange
      const app = {};
      const passport = {};
      const req = {
        isAuthenticated() {
          return true;
        }
      };
      const res = {
        render(viewName, params) {
          // assert
          expect(viewName).toBe('fromCallback');
        },
        redirect(target) {
          // assert
          expect(target).toBe('/fromCallback');
        }
      };
      function callback(req, res)  {
        res.render('fromCallback')
      };
      const indexController = new IndexController(app, passport);
      // act
      indexController.isLoggedIn(req, res, callback)
      // assert
    });
  });
  describe('#getHome', () => {
    it('Should redirect to login if not authenticated', () => {
      // arrange
      const app = {};
      const passport = {};
      const req = {};
      const res = {};
      const indexController = new IndexController(app, passport);
      // act
      indexController.getHome(req, res)
      // assert
    });
    it('Should render home page if authenticated', () => {
      // arrange
      const app = {};
      const passport = {};
      const req = {};
      const res = {};
      const indexController = new IndexController(app, passport);
      // act
      indexController.getHome(req, res)
      // assert
    });
  });
  describe('#getLogin', () => {
    it('Should render login page', () => {
      // arrange
      const app = {};
      const passport = {};
      const req = {};
      const res = {};
      const indexController = new IndexController(app, passport);
      // act
      indexController.getLogin(req, res)
      // assert
    });
    it('Should display error message if there is one', () => {
      // arrange
      const app = {};
      const passport = {};
      const req = {};
      const res = {};
      const indexController = new IndexController(app, passport);
      // act
      indexController.getLogin(req, res)
      // assert
    });
    it('Shouldn\'t display any message if there aren\'t', () => {
      // arrange
      const app = {};
      const passport = {};
      const req = {};
      const res = {};
      const indexController = new IndexController(app, passport);
      // act
      indexController.getLogin(req, res)
      // assert
    })
  });
  describe('#getSignup', () => {
    it('Should render signup page', () => {
      // arrange
      const app = {};
      const passport = {};
      const req = {};
      const res = {};
      const indexController = new IndexController(app, passport);
      // act
      indexController.getSignup(req, res)
      // assert
    });
    it('Should display error message if there is one', () => {
      // arrange
      const app = {};
      const passport = {};
      const req = {};
      const res = {};
      const indexController = new IndexController(app, passport);
      // act
      indexController.getSignup(req, res)
      // assert
    });
    it('Shouldn\'t display any message if there aren\'t', () => {
      // arrange
      const app = {};
      const passport = {};
      const req = {};
      const res = {};
      const indexController = new IndexController(app, passport);
      // act
      indexController.getSignup(req, res)
      // assert
    });
  });
  describe('#getProfile', () => {
    it('Should redirect to login if not authenticated', () => {
      // arrange
      const app = {};
      const passport = {};
      const req = {};
      const res = {};
      const indexController = new IndexController(app, passport);
      // act
      indexController.getProfile(req, res)
      // assert
    });
    it('Should render profile page if authenticated', () => {
      // arrange
      const app = {};
      const passport = {};
      const req = {};
      const res = {};
      const indexController = new IndexController(app, passport);
      // act
      indexController.getProfile(req, res)
      // assert
    });
  });
  describe('#getLogout', () => {
    it('Should redirect to login after logged out', () => {
      // arrange
      const app = {};
      const passport = {};
      const req = {};
      const res = {};
      const indexController = new IndexController(app, passport);
      // act
      indexController.getLogout(req, res)
      // assert
    });
  });
})
