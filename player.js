var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
	name: {type:String, required:true},
	number: Number,
	properties:{"att":Number,"def":Number,"speed":Number,"dribbling":Number}
}, {collection: 'players'});

module.exports = mongoose.model('Players', userSchema);

