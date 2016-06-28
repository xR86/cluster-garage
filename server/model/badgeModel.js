var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Badge model structure
var badgeSchema = new Schema({
  type: {
    type: String,
    enum: ['technical', 'soft-skills'],
    required: true
  },
  name: {
  	type: String, 
  	maxlength: 30,
  	required: true
  },
  description: {
  	type: String,
  	maxlength: 100,
  	default: 'N/A'
  }
});

module.exports = mongoose.model('Badge', badgeSchema);