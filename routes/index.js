var express = require('express');
var router = express.Router();

var server = require('../app');
var mongoose = require('mongoose');

var helloWorld = 'Welcome, MEAN stack !';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cluster Garage', helloString: helloWorld });
});

module.exports = router;
