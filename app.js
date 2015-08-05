//Require Section
var comic = require('./comic');							//comic file for method to get character data
var http = require("http");									//http for get method to connect to API
var crypto = require('crypto');							//crypto for md5 hash
var config = require('./config/config');		//config file for API keys 

//Character input
var character = "spider-man"; //change to argv input

//Code for comic module
var key_pub = config.key_pub;
var key_priv = config.key_priv;
var time_stamp = Math.floor(new Date() / 1000);
var md5String = time_stamp + key_priv + key_pub;
var hash = crypto.createHash('md5').update(md5String).digest('hex');

function printMessage(character, description, attribution) {
	var message = character + ": " + description + "\n" +attribution;
	console.log(message);
}

//Connect to the API URL (http://gateway.marvel.com:80/v1/public/characters?name=character&apikey=publickey)
var request = http.get("http://gateway.marvel.com:80/v1/public/characters?name=" + character +"&ts=" + time_stamp + "&apikey=" + key_pub + "&hash=" + hash, 
	  function(response){
			var body = "";
	
			//Read the data
			response.on('data', function (chunk) {
				body += chunk;
			});

			response.on('end', function(){
				//Parse the data (description is in results object array)
				var characterData = JSON.parse(body);
				//use name from response instead of name entered for correct capitalization and punctuation
				printMessage(characterData["data"].results[0].name, characterData["data"].results[0].description, characterData["attributionText"]);  
				//console.dir(characterData["data"].results[0]);
				//console.dir(characterData["attributionText"]);
				//what if Marvel description is blank? --> Throw message: No description is available for this Marvel comic character

			});
			
			


			//Print data and Marvel's attribution ('Data provided by Marvel. (c) 2014 Marvel') -- use attributionText from response
			//printMessage(character, "He's a really cool dude!");


});

request.on('error', function(error){
	console.error(error.message);
});

//Use module.exports to export function to get comic character info