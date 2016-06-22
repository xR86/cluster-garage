var express = require('express');
var router = express.Router();

//var server = require('../app');
var mongoose = require('mongoose');

var helloWorld = 'Welcome, MEAN stack !';

function find (collec, query, callback) {
    mongoose.connection.db.collection(collec, function (err, collection) {
		collection.find(query).toArray(callback);
    });
}

find('test', {"_id": { $eq: "5769621cb583fb11980b0213" }}, function (err, data) {
    console.log(data);
    helloWorld = data;
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cluster Garage', helloString: helloWorld });
});

module.exports = router;
