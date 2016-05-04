var jsonObj = require("./data/players.json");
exports.getPlayerByNumber = function(num){
	var arr = new Array();
	for(var i in jsonObj.players){
		var player = jsonObj.players[i];
		if(player.number >= num){
			arr.push(player);
		}
	}
	return arr;
}

exports.getFastestPlayers = function(speed){
	var arr = new Array();
	for(var i in jsonObj.players){
		var player = jsonObj.players[i];
		if(player.properties.speed >= speed){
			arr.push(player);
		}
	}
	return arr;
}

exports.getAllPlayers = function(){
	return jsonObj;
}