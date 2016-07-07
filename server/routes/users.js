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


module.exports = router;
