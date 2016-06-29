var express = require('express');
var router = express.Router();

//var server = require('../app');
var mongoose = require('mongoose');
var User = require('../server/model/userModel');

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
router.get('/', function(req, res) {

  //res.redirect('/login');

  res.render('index', { title: 'Cluster Garage', helloString: helloWorld });
});


//Login component

router.get('/login', function(req, res) {
  res.render('login', { title: 'Cluster Garage - Login' });
});

router.post('/login', function(req, res) {

  console.log(req.body);
  console.log(req.email);

  User.findOne({'email': req.email}, function (err, user) {
        if (err) {
          log.error(err);
          return res.end(err);
        }
        if (!user) {
          res.end("{message: 'User not found'}");
        }
        if (!user.checkPassword(req.password)) {
          res.end("{message: 'Wrong password'}");
        }

        console.log('User %s %s has logged in.', user.firstName, user.lastName);

        res.redirect('/');

        res.end();
      })

  //res.end();

}); 

/*
router.get('/logged', function (req, res) {
    res.json({
      authenticated : req.isAuthenticated(),
      user: req.user ? req.user : null
    });
  });*/



//Register component

router.get('/register', function(req, res) {
  res.render('register', { title: 'Cluster Garage - Register' });
});

router.post('/register', function(req, res) {
  var newUser = new User(req.body);

  console.log(req.body);

  //console.log(newUser.pass);

  newUser.pass = newUser.randomPasswordHashed();

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


module.exports = router;
