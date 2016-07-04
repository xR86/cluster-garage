var newUser, data;

var should   = require("should");
var app      = require("../../app");
var mongoose = require("mongoose");
var User     = mongoose.model("User");
var request  = require("supertest");
var agent = request.agent(app);

describe('User', function () {
  before(function(done) {
      newUser = new User({
        email    : "gigi@gigi.ro",
        firstName: "Gigi",
        lastName : "Popescu",
        pass : "parola"
      });

      newUser.pass = newUser.hashPassword(newUser.pass);

      newUser.save(function(err){
        //console.log(newUser.firstName);
        //console.log(newUser.pass);

        return done();
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
        .end(done)
      })

    after(function(done) {
          User.find({ 'email': 'gigi@gigi.ro' }).remove().exec();
          return done();
      });

  })
})
