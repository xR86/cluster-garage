var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var webinarUserSchema = new Schema({
	userId:{
		type: String,
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
    type: String,
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
    type: String,
    required: true
  },
  team: {
    type: String,
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