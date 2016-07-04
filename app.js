var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var dbConfig = require('./server/config/db');

var routes = require('./server/routes/index');
var messages = require('./server/routes/message');
var users = require('./server/routes/users');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'ejs');

app.use('/public', express.static(path.join(__dirname, '/public')));

//DB connection
app.db = mongoose.connect(dbConfig.url, function (err) {
  if (err) {
    console.log(err);
  }
  console.log('Connected to DB.');
});

//graceful exit
// If the Node process ends, close the Mongoose connection 
/*
process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 
*/

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Configure passport
require('./server/config/passport')(app);


app.use('/', routes);
app.use('/message', messages);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
