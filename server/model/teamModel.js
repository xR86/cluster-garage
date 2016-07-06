var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Team user model structure
var teamUserSchema = new Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
      	ref: 'User',
      	required: true
	}
});

//Project model structure
var projectSchema = new Schema({
	projectName:{
		type: String,
		required: true
	}
});


//Team model structure
var teamSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  users:  [teamUserSchema],
  projects: [projectSchema]  
});

module.exports = mongoose.model('Team', teamSchema);