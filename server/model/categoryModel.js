var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Category model structure
var categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  addedBy: {
  	type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Category', categorySchema);