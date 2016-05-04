var express = require('express');
var url = require('url');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var players = require("./players");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/assets',express.static(__dirname + "/public"));




// no parameter
app.get('/getAllPlayers',function(req,res, next){
	res.json(players.getAllPlayers());
	req.next()
});

// parameters
app.get('/getPlayerByNumber/:num/',function(req,res, next){
	var num = req.params.num;
	var arr = players.getPlayerByNumber(num);
	res.json(arr);
	req.next()
});

// parameters
app.get('/getFastestPlayers/:speed/',function(req,res, next){
	var speed = req.params.speed;
	var arr = players.getFastestPlayers(speed);
	res.json(arr);
	req.next()
});

app.all('*',function(req,res, next){
 res.sendFile('index.html', {root: __dirname })
});

app.listen(port);
console.log('listenning on port'+ port);