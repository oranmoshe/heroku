# Football Manager API

https://football-manager-2016.herokuapp.com

This service is designed to let agents soccer players or teams up to date information on ranking football players.

| Service     | values    | Example |
| --------|---------|-------|
| Get Fastest Players | int | https://football-manager-2016.herokuapp.com/getFastestPlayers/89  |
| Get Player By Number | int |  https://football-manager-2016.herokuapp.com/getPlayerByNumber/10  |
| Get All Players | - |  https://football-manager-2016.herokuapp.com/getAllPlayers  |

### Get Fastest Players

This function accepts an integer value of the minimum speed of the player and returns a list of players. 

### Get Player By Number

This function accepts an integer value of player number and returns a list of players. 

### Get All Players

This function returns a list of all the players. 

### JSON structure

Provides information on player name and No. shirt that he wears. Also, the player features: Attack, defense, speed, dribbling.


     {
        "name":"Messi",
        "number":10,
        "properties":
        {
                "att":94,
                "def":42,
                "speed":89,
                "dribbling":97
        }
    }
   
#
![alt tag](https://football-manager-2016.herokuapp.com/assets/football_manager_2016_bkg.jpg)
