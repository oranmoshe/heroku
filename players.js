var players = null;
var mongoose = require('mongoose');
var connectionString = 'mongodb://oran:1234@ds011902.mlab.com:11902/players';
var playerSchema = require('./player');

exports.getPlayerByNumber = function(num,res){
	var db = mongoose.connect(connectionString);
	mongoose.connection.once('open',function(){
		console.log('connected.');
		playerSchema.find({}).
		where('number').equals(num).		
		exec(function(err,user){
			if (err) throw err;
			console.log(user);
			res.status(200).json(user);
			mongoose.disconnect();
		});		
	});
}

exports.getFastestPlayers = function(speed,res){
	var db = mongoose.connect(connectionString);
	mongoose.connection.once('open',function(){
		console.log('connected.');
		playerSchema.find({}).
		where('properties.att').gte(speed).
		exec(function(err,user){
			if (err) throw err;
			console.log(user);
			res.status(200).json(user);
			mongoose.disconnect();
		});		
	});
}

exports.getAllPlayers = function(res){
	var db = mongoose.connect(connectionString);
	mongoose.connection.once('open',function(){
		console.log('connected.');
		playerSchema.find({}, {_id: 0}).
		exec(function(err,user){
			if (err) throw err;
			console.log(user);
			res.status(200).json(user);
			mongoose.disconnect();
		});		
	});
}