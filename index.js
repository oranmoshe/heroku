var express = require('express');
var url = require('url');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var players = require("./players");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/assets',express.static(__dirname + "/public"));


// Getting the fastest player 
app.get('/getFastestPlayers/:speed/',function(req,res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.set('header-Three', 'Fastest-Players');
    next();
    },
// Calling the exported function
    function (req, res, next) {
    var speed = req.params.speed;
    players.getFastestPlayers(speed,res);
    console.log("getFastestPlayers");
});
   

// Getting all players
app.get('/getAllPlayers',function(req,res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.set('header-One', 'All-Players');
    next();
    },
// Calling the exported function
    function (req, res, next) {
    players.getAllPlayers(res);    
    console.log("getAllPlayers");
});


// Getting a player by nubmer
app.get('/getPlayerByNumber/:num/',function(req,res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.set('header-Two', 'Stud-By-Number');
    next();
    },
// Calling the exported function
    function (req, res, next) {
    var num = req.params.num;
    players.getPlayerByNumber(num,res);
    console.log("getPlayerByNumber");
});

app.all('*',function(req,res){
    res.sendFile('public/index.html', {root: __dirname });
});

app.listen(port);
console.log('listenning on port'+ port);