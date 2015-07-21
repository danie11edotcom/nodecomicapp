//Require http
var http = require("http");

//Require config file for API keys
var config = require('./config/config');

//Require comic file for method to get character data
var comic = require('./comic');

//Prepare
//Problem:  A simple way to find Marvel comic character descriptions is needed
//Solution: Build a command line app to retrieve Marvel character summary for given name using Node.js and Marvel API

var character = "spider-man";
var key_pub = config.key_pub;
var key_priv = config.key_priv;
var time_stamp = Math.floor(new Date() / 1000);
// create var for md5 has calculationvar hash = 
var md5String = time_stamp + key_priv + key_pub;
var hash = require();

function printMessage(character, description) {
	var message = character + "'s description is: " + description;
	console.log(message);
}

//Plan
//Connect to the API URL (http://gateway.marvel.com:80/v1/public/characters?name=character&apikey=publickey)
var request = http.get("http://gateway.marvel.com:80/v1/public/characters?name=" + character + "&apikey=" + key_pub + "&hash=" + key_priv, function(response){
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