var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var webinarUserSchema = new Schema({
	userId:{
		type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
	},
	RSVP: {
		type: String,
		enum: ['yes', 'maybe', 'no'],
    required: true
	}
});

//Webinar model structure
var webinarSchema = new Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  title: {
  	type: String, 
  	required: true
  },
  link: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: '-'
  },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
    required: true
  },
  users: [webinarUserSchema],
  dateAdded: {
    type: Date,
    default: Date.now
  },
  dateEvent: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Webinar', webinarSchema);