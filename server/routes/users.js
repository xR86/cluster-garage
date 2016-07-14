var express = require('express');
var passport = require('passport');

var router = express.Router();

var mongoose = require('mongoose');
var User = require('../model/userModel');

//User GET
router.get('/', function(req, res) {
  //var query = {};

  /*User.find({}, {pass: 0}, page, function (err, users) {
      if (err) {
        console.log(err);
        return res.send(err);
      }
      res.json(users);
    });*/
  mongoose.connection.db.collection("users", function (err, collection) {
    if (err) {
        console.log(err);
        return res.send(err);
    }
    
    collection.find({}, {_id:0, email: 0, pass: 0, __v: 0}).toArray(function(err,docs){
      if (err) {
        console.log(err);
        return res.send(err);
      }
      //console.log(docs);
      return res.json(docs);
    });
  });

});


//register POST
router.post('/', function(req, res) {
  var newUser = new User(req.body);

  //console.log(req.body);
  newUser.pass = newUser.hashPassword(newUser.pass);
  //console.log(newUser.pass);
  
  newUser.save(function (err, message) {
      if (err) {
        console.log(err);
        return res.send(err);
      }
      res.end();
    });

}); 


//user settings
router.put('/:id/name', function(req,res){
  console.log("body: ", req.body);
  console.log("\toid is: ", req.params.id);

  User.findOne({_id: req.params.id}, function (err, user) {
      if (err) {
        return res.send(err);
      }
      console.dir(user.firstName);
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;

      //save the user
      user.save(function (err) {
        if (err) {
          return res.send(err);
        }
        res.json({message: 'User ' + user.email + ' successfuly updated'});
        res.end();
      });
  });

});

//user settings
router.put('/:id/description', function(req,res){
  console.log("body: ", req.body);
  console.log("\toid is: ", req.params.id);

  User.findOne({_id: req.params.id}, function (err, user) {
      if (err) {
        return res.send(err);
      }
      console.dir(user.firstName);
      user.description = req.body.description;

      //save the user
      user.save(function (err) {
        if (err) {
          return res.send(err);
        }
        res.json({message: 'User ' + user.email + ' successfuly updated'});
        res.end();
      });
  });

});

module.exports = router;
