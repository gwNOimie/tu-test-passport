// config/passport.js

// load all the things we need
var LocalStrategy = require('passport-local').Strategy

// load up the user model
const User = require('../app/models/userModel')
const UserModel = User.model
const UserSchema = User.schema

// expose this function to our app using module.exports
module.exports = function (passport) {

  // =========================================================================
  // passport session setup ==================================================
  // =========================================================================
  // required for persistent login sessions
  // passport needs ability to serialize and unserialize users out of session

  // used to serialize the user for the session
  passport.serializeUser(function (user, done) {
    done(null, user.id)
  })

  // used to deserialize the user
  passport.deserializeUser(function (id, done) {
    UserModel.findById(id, function (err, user) {
      done(err, user)
    })
  })

  // =========================================================================
  // LOCAL SIGNUP ============================================================
  // =========================================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'

  passport.use('local-signup', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with email
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true // allows us to pass back the entire request to the callback
  },
    function (req, email, password, done) {
      // find a user whose email is the same as the forms email
      // we are checking to see if the user trying to login already exists
      UserModel.findOne({ 'local.email': email }, function (err, user) {
        // if there are any errors, return the error
        if (err)
          return done(err)

        // check to see if theres already a user with that email
        if (user) {
          return done(null, false, req.flash('signupMessage', 'That email is already taken.'))
        } else {

          // if there is no user with that email
          // create the user
          var newUser = new UserModel()

          // set the user's local credentials
          newUser.local.email = email
          newUser.local.password = newUser.generateHash(password) // use the generateHash function in our user model
          newUser.local.lastname = req.body.lastname
          newUser.local.firstname = req.body.firstname
          newUser.local.nickname = req.body.nickname
          newUser.local.birthdate = req.body.birthdate
          newUser.local.gender = req.body.gender
          newUser.local.presentation = req.body.presentation
          newUser.local.picture = req.body.picture

          const error = newUser.validate((error) => {
            if (error) {
              console.log(error.errors['local.email'].properties.message)
              return done(null, false, req.flash('signupMessage', error.errors['local.email'].properties.message))
            } else {
              // save the user
              newUser.save(function (err) {
                if (err)
                  throw err
                return done(null, newUser)
              })
            }
          })
        }
      })
    }))

  // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

  passport.use('local-login', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with email
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true // allows us to pass back the entire request to the callback
  },
    function (req, email, password, done) { // callback with email and password from our form

      // find a user whose email is the same as the forms email
      // we are checking to see if the user trying to login already exists
      UserModel.findOne({ 'local.email': email }, function (err, user) {
        // if there are any errors, return the error before anything else
        if (err)
          return done(err)

        // if no user is found, return the message
        if (!user)
          return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash

        // if the user is found but the password is wrong
        if (!user.validPassword(password))
          return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')) // create the loginMessage and save it to session as flashdata

        // all is well, return successful user
        return done(null, user)
      })
    }))
}
