var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Message model structure
var msgSchema = new Schema({
  msgContent: {
    type: String,
    required: true
  },
  mstTimestamp: {
  	type: Date, 
  	default: Date.now
  }
});

module.exports = mongoose.model('Message', msgSchema);