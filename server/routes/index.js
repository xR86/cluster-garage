var express = require('express');
var passport = require('passport');

var router = express.Router();

var mongoose = require('mongoose');
var User = require('../model/userModel');



var helloWorld = 'Welcome, MEAN stack !';

/* GET home page. */
router.get('/', isAuthenticated, function(req, res) {

  //res.redirect('/login');
  res.render('index', { title: 'Cluster Garage', helloString: helloWorld });
});


//Login component

router.get('/login', isNotAuthenticated, function(req, res) {
  res.render('login', { title: 'Cluster Garage - Login' });
});

//Handle login requests
router.route('/login')
  .post(passport.authenticate('local-login', {
      successRedirect: '/',
      failureRedirect: '/login'
    })/*,
    function (req, res) {

      // res.send({
      //   authenticated : req.isAuthenticated(),
      //   user: req.user ? req.user : null
      // });
  }*/
  );

//Handle logout
router.get('/logout', isAuthenticated, function (req, res) {
    req.logout();
    res.redirect('/login');
    res.end();
  });


//Expose session ping mechanism
router.get('/logged', function (req, res) {
  //Version 1
  //HACK: it takes an object and modifies it, then it is parsed, then it is stringified again
  /*var user = JSON.stringify(req.user, function(key, value){ //replacer callback
    if (key === "pass") {
      return undefined;
    }
    return value;
  });
  console.log(user);
  user = JSON.parse(user);*/

  //Version 2
  var user;
  if(req.user){
    user = JSON.stringify(req.user); //needs to be stringified before parsing
    user = JSON.parse(user, function(key, value) { //reviver callback
      if (key === "pass") {
        return undefined;
      }
      return value;
    });
  }

  res.json({
    authenticated : req.isAuthenticated(),
    user: req.user ? user : null
  });
});


//Register component
router.get('/register', isNotAuthenticated, function(req, res) {
  res.render('register', { title: 'Cluster Garage - Register' });
});


//register POST - part of API in users.js


//static dashboard route
router.get('/dashboard', function(req, res) {
  res.render('dashboard', { title: 'Cluster Garage - Dashboard' });
});


//utils function
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  //res.status(401);
  res.redirect('/login');
  //res.send({message: 'Not logged in.'})
}

function isNotAuthenticated(req, res, next) {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}


module.exports = router;
