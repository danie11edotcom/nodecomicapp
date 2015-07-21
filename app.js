//Require Section
var comic = require('./comic');							//comic file for method to get character data
var http = require("http");									//http for get method to connect to API
var crypto = require('crypto');							//crypto for md5 hash
var config = require('./config/config');		//config file for API keys 



//Prepare
//Problem:  A simple way to find Marvel comic character descriptions is needed
//Solution: Build a command line app to retrieve Marvel character summary for given name using Node.js and Marvel API

var character = "spider-man";
var key_pub = config.key_pub;
var key_priv = config.key_priv;
var time_stamp = Math.floor(new Date() / 1000);
var md5String = time_stamp + key_priv + key_pub;
var hash = crypto.createHash('md5').update(md5String).digest('hex');


function printMessage(character, description) {
	var message = character + "'s description is: " + description;
	console.log(message);
}

//Plan
//Connect to the API URL (http://gateway.marvel.com:80/v1/public/characters?name=character&apikey=publickey)
var request = http.get("http://gateway.marvel.com:80/v1/public/characters?ts=" + time_stamp + "&apikey=" + key_pub + "&hash=" + hash, 
	  function(response){
			console.dir(response.StatusCode);
	
			//Read the data (description is in results array -->results.description?)
			response.on('data', function (chunk) {
				console.log('BODY: ' + chunk);
			})

			//Parse the data


			//Print data and Marvel's attribution ('Data provided by Marvel. (c) 2014 Marvel') -- use attributionText from response
			//printMessage(character, "He's a really cool dude!");


});


//Use module.exports to export function to get comic character info