var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roleSchema = new Schema({
	role: {
		type: String,
  		enum: ['tester', 'frontend', 'backend', 'UI/UX', 'QA', 'scrum master', 'team lead'],
  		required: true
	}
});

var userBadgeSchema = new Schema({
	badgeId: {
		type: String,
		required: true
	},
	badgeDate: {
		type: Date,
		default: Date.now
	}
});

//User model structure
var userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  pass: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  avatar: {
    type: String
  },
  role: {
  	type: String,
  	default: 'basic',
  },
  teamRoles: [roleSchema],
  badges: [badgeReference],
  team: {
  	type: String
  }
});

module.exports = mongoose.model('User', userSchema);