var newUser, data;

var should   = require("should");
var app      = require("../../app");
var mongoose = require("mongoose");
var User     = mongoose.model("User");
var request  = require("supertest");
var agent = request.agent(app);

describe('User', function () {
  this.timeout(15000);

  before(function(done) {
        data = JSON.stringify({ 
          email    : "gigi@gigi.ro",
          firstName: "Gigi",
          lastName : "Popescu",
          pass : "parola"
        });
        
        it('should redirect to /login', function (done) {
          agent
          .post('/users')
          .type('json')
          .send(data)
          //.expect('Location','/login')
          .end(done)/*.then(function(){
            return done();
          })*/;
        });
    });
  describe('Login test', function () {
      data = JSON.stringify({ 
        'email': 'gigi@gigi.ro', 
        'pass': 'parola' 
      });
      
      it('should redirect to /', function (done) {
        agent
        .post('/login')
        .type('json')
        .send(data)
        .expect('Location','/')
        .end(done).then(function(){
          return done();
        });
      });

    after(function(done) {
          User.find({ 'email': 'gigi@gigi.ro' }).remove().exec();
          return done();
      });

  });
});
