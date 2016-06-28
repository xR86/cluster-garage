var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Book model structure
var bookSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  cover: {
    type: String
  },
  type: {
    type: String,
    enum: ['file', 'link'],
    required: true
  },
  link: {
    type: String,
    required: true
  },
  description: {
    type: String,
    maxlength: 200,
    default: 'N/A'
  },
  rating: {
    type: Number,
  },
  ratingCount: {
    type: Number
  },
  addedBy: {
    type: String,
    required: true
  },
  team: {
    type: String,
    required: true
  },
  dateAdded: {
  	type: Date, 
  	default: Date.now
  }
});

module.exports = mongoose.model('Book', bookSchema);