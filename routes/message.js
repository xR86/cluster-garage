var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Message = require('../server/model/messageModel');

/* GET home page. */
router.get('/', function(req, res) {
  var message = new Message();

  mongoose.connection.db.collection("messages", function (err, collection) {
    collection.find({}).toArray(function(err,docs){
      console.log(docs);
      return res.send( docs );
    });
  });
  
});

router.post('/', function(req, res) {
	var message = new Message(req.body);

	console.log(req.body);
	
	message.save(function (err, message) {
      if (err) {
        console.log(err);
        return res.send(err);
      }
        //return res.json({message: "Successfully added new message.", data: message});
    });

});	

router.delete('/:user_id', function(req, res) {

  console.log(req.params.user_id); 
  Message.remove({_id: req.params.user_id}, function (err) {
      if (err) {
        return res.send(err);
      }
      res.json({message: 'Successfully removed exam.'});
  });

});


module.exports = router;
