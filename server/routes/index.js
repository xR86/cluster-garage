var express = require('express');
var passport = require('passport');

var router = express.Router();

//var server = require('../app');
var mongoose = require('mongoose');
var User = require('../model/userModel');

var helloWorld = 'Welcome, MEAN stack !';

function find (collec, query, callback) {
    mongoose.connection.db.collection(collec, function (err, collection) {
		collection.find(query).toArray(callback);
    });
}

/*find('test', {"_id": { $eq: "5769621cb583fb11980b0213" }}, function (err, data) {
    console.log(data);
    helloWorld = data;
});*/

/* GET home page. */
router.get('/', isAuthenticated, function(req, res) {

  //res.redirect('/login');

  res.render('index', { title: 'Cluster Garage', helloString: helloWorld });
});


//Login component

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

router.get('/login', function(req, res) {
  res.render('login', { title: 'Cluster Garage - Login' });
});


//Handle logout
  router.route('/logout')
    .get(function (req, res) {
      req.logout();
      res.redirect('/login');
      res.end();
    });


  //Expose session ping mechanism
  router.get('/logged', function (req, res) {
    res.json({
      authenticated : req.isAuthenticated(),
      user: req.user ? req.user : null
    });
  });

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  //res.status(401);
  res.redirect('/login');
  //res.send({message: 'Not logged in.'})
}


//Register component

router.get('/register', function(req, res) {
  res.render('register', { title: 'Cluster Garage - Register' });
});

router.post('/register', function(req, res) {
  var newUser = new User(req.body);

  console.log(req.body);

  //console.log(newUser.pass);

  newUser.pass = newUser.hashPassword(newUser.pass);

  //console.log(newUser.pass);
  
  newUser.save(function (err, message) {
      if (err) {
        console.log(err);
        return res.send(err);
      }
        //return res.json({message: "Successfully added new message.", data: message});
      res.end();
    });

}); 

router.get('/dashboard', function(req, res) {
  res.render('dashboard', { title: 'Cluster Garage - Dashboard' });
});


module.exports = router;
