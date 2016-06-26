var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Message model structure
var messageSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  timestamp: {
  	type: Date, 
  	default: Date.now
  }
});

module.exports = mongoose.model('Message', messageSchema);