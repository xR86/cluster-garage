var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local');//.Strategy ?
var User = require('../model/userModel');

var hour = 3600000; //1000ms * 60sec * 60min = 1 hour
//var halfMinute = 30000; //1000ms * 30sec = 30 sec
//var expireTime = 600000; //1000 * 60 * 10 = 10 minutes

module.exports = function (app) {
  //Setup passport
  app.use(session({
    secret: 'some secret string to protect the session',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: hour }
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id/*, {pass: 0}*/, function (err, user) {
      done(err, user);
    });
  });

  //Set up the Local authentication strategy
  passport.use('local-login', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'pass',
      passReqToCallback: true
    },
    function (req, email, password, done) {
    	console.log(email, password);

      //Find the user by email
      User.findOne({'email': email}, function (err, user) {
       if (err) {
          console.log('mongoose:', err);
          return done(err);
        }
        if (!user) {
          return done(null, false, console.log({message: 'User not found'}));
        }
        if (!user.checkPassword(password)) {
          return done(null, false, console.log({message: 'Wrong password'}));
        }
        console.log('User %s %s has logged in.', user.firstName, user.lastName);
        return done(null, user);
      });
    }
  ));

};