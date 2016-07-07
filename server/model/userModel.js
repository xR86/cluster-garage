var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
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
		type: mongoose.Schema.Types.ObjectId,
    ref: 'Badge',
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
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
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
  	default: 'basic'
  },
  teamRoles: [roleSchema],
  badges: [userBadgeSchema],
  team: {
  	type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
  }
});

userSchema.methods.hashPassword = function (pass) {
  return bcrypt.hashSync(pass, bcrypt.genSaltSync(10), null);
};

userSchema.methods.checkPassword = function (pass) {
  return bcrypt.compareSync(pass, this.pass);
};
userSchema.methods.randomPasswordHashed = function () {
  return this.hashPassword(Math.random().toString(36).substr(2, 8));
};

module.exports = mongoose.model('User', userSchema);