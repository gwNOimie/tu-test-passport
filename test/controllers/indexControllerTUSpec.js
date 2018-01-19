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
        isAuthenticated: () => {
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
        res.render('fromCallback');
      }
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
      const req = {
        isAuthenticated: () => {
          return false;
        }
      };
      const res = {
        redirect(target) {
          // assert
          expect(target).toBe('/login');
        }
      };
      const indexController = new IndexController(app, passport);
      // act
      indexController.getHome(req, res)
    });
    it('Should render home page if authenticated', () => {
      // arrange
      const app = {};
      const passport = {};
      const req = {
        isAuthenticated: () => {
          return true;
        }
      };
      const res = {
        render(viewName, params) {
          // assert
          expect(viewName).toBe('home');
        }
      };
      const indexController = new IndexController(app, passport);
      // act
      indexController.getHome(req, res)
    });
  });
  describe('#getLogin', () => {
    it('Should render login page', () => {
      // arrange
      const app = {};
      const passport = {};
      const req = {
        flash: () => {
            return undefined
        }
      };
      const res = {
        render(viewName, params) {
          // assert
          expect(viewName).toBe('login');
        }
      };
      const indexController = new IndexController(app, passport);
      // act
      indexController.getLogin(req, res)
    });
    it('Should display error message if there is one', () => {
      // arrange
      const app = {};
      const passport = {};
      const req = {
        flash: () => {
            return 'error'
        }
      };
      const res = {
        render(viewName, params) {
          // assert
          expect(viewName).toBe('login');
          expect(params).toEqual({message: 'error'})
        },
        redirect(target) {
          // assert
          expect(target).toBe('/login');
        }
      };
      const indexController = new IndexController(app, passport);
      // act
      indexController.getLogin(req, res)
    });
    it('Shouldn\'t display any message if there aren\'t', () => {
      const app = {};
      const passport = {};
      const req = {
        flash: () => {
            return undefined
        }
      };
      const res = {
        render(viewName, params) {
          // assert
          expect(viewName).toBe('login');
          expect(params).toEqual({message: undefined});
        },
        redirect(target) {
          // assert
          expect(target).toBe('/login');
        }
      };
      const indexController = new IndexController(app, passport);
      // act
      indexController.getLogin(req, res)
    })
  });
  describe('#getSignup', () => {
    it('Should render signup page', () => {
      // arrange
      const app = {};
      const passport = {};
      const req = {
        flash: () => {
            return undefined
        },
      };
      const res = {
        render(viewName, params) {
          // assert
          expect(viewName).toBe('signup');
        }
      };
      const indexController = new IndexController(app, passport);
      // act
      indexController.getSignup(req, res)
    });
    it('Should display error message if there is one', () => {
      // arrange
      const app = {};
      const passport = {};
      const req = {
        flash: () => {
            return 'error'
        }
      };
      const res = {
        render(viewName, params) {
          // assert
          expect(viewName).toBe('signup');
          expect(params).toEqual({message: 'error'});
        }
      };
      const indexController = new IndexController(app, passport);
      // act
      indexController.getSignup(req, res)
    });
    it('Shouldn\'t display any message if there aren\'t', () => {
      // arrange
      const app = {};
      const passport = {};
      const req = {
        flash: () => {
            return undefined
        }
      };
      const res = {
        render(viewName, params) {
          // assert
          expect(viewName).toBe('signup');
          expect(params).toEqual({message: undefined});
        }
      };
      const indexController = new IndexController(app, passport);
      // act
      indexController.getSignup(req, res)
    });
  });
  describe('#getProfile', () => {
    it('Should redirect to login if not authenticated', () => {
      // arrange
      const app = {};
      const passport = {};
      const req = {
        isAuthenticated: () => {
          return false;
        }
      };
      const res = {
        redirect(target) {
          // assert
          expect(target).toBe('/login');
        }
      };
      const indexController = new IndexController(app, passport);
      // act
      indexController.getProfile(req, res)
    });
    it('Should render profile page if authenticated', () => {
      // arrange
      const app = {};
      const passport = {};
      const req = {
        isAuthenticated: () => {
          return true;
        }
      };
      const res = {
        render(viewName, params) {
          // assert
          expect(viewName).toBe('profile');
        }
      };
      const indexController = new IndexController(app, passport);
      // act
      indexController.getProfile(req, res)
    });
  });
  describe('#postProfile', () => {
    it('Should redirect to profile after editing user info', () => {
      // arrange
      const app = {};
      const passport = {};
      const req = {
        body: {
          firstname: 'plop',
          lastname: 'plop'
        },
        isAuthenticated: () => {
          return true;
        }
      };
      const res = {
        render(viewName, params) {
          // assert
          expect(viewName).toBe('profile');
        },
        redirect(target) {
          // assert
          expect(target).toBe('/profile');
        }
      };
      const User = {
        user: {
          firstname: 'pif',
          lastname: 'paf',
          validate: () => null
        },
        update: (id, data, callback) => {
          this.user.firstname = data.firstname;
          this.user.lastname = data.lastname;
          callback(null, data);
        },
        findById: () => this.user
      };
      const indexController = new IndexController(app, passport, User);
      // act
      indexController.postProfile(req, res)
    });
    it('Should send received data to user model', () => {
      // arrange
      const app = {};
      const passport = {};
      const req = {
        body: {
          firstname: 'plop',
          lastname: 'plop'
        },
        isAuthenticated: () => {
          return true;
        }
      };
      const res = {
        render(viewName, params) {
          // assert
          expect(viewName).toBe('profile');
          expect(params.user).toEqual({
            firstname: 'plop',
            lastname: 'plop',
            validate: () => null
        })
        },
        redirect(target) {
          // assert
          expect(target).toBe('/profile');
        }
      };
      const User = {
        user: {
          firstname: 'pif',
          lastname: 'paf',
          validate: () => null
        },
        update: (id, data, callback) => {
          this.user.firstname = data.firstname;
          this.user.lastname = data.lastname;
          callback(null, data);
        },
        findById: () => this.user
      };
      const indexController = new IndexController(app, passport, User);
      // act
      indexController.postProfile(req, res);
    });
    it('Should display error message if something occurred while saving new data', () => {
      // arrange
      const app = {};
      const passport = {};
      const req = {
        body: {
          firstname: 'plop',
          lastname: 'plop'
        },
        isAuthenticated: () => {
          return true;
        },
        flash: () => {
          return 'error'
        }
      };
      const res = {
        render(viewName, params) {
          // assert
          expect(viewName).toBe('profile');
          expect(params.message).toBe('error')
        },
        redirect(target) {
          // assert
          expect(target).toBe('/profile');
        }
      };
      const User = {
        user: {
          firstname: 'pif',
          lastname: 'paf',
          validate: () => null
        },
        update: (id, data, callback) => {
          this.user.firstname = data.firstname;
          this.user.lastname = data.lastname;
          callback(null, data);
        },
        findById: () => this.user
      };
      const indexController = new IndexController(app, passport, User);
      // act
      indexController.postProfile(req, res);
    });
  })
  describe('#getLogout', () => {
    it('Should redirect to login after logged out', () => {
      // arrange
      const app = {};
      const passport = {};
      const req = {
        logout: () => {

        }
      };
      const res = {
        redirect(target) {
          // assert
          expect(target).toBe('/login');
        }
      };
      const indexController = new IndexController(app, passport);
      // act
      indexController.getLogout(req, res)
      // assert
    });
  });
})
