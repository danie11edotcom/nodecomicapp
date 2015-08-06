//Require Section
var http = require("http");									//http for get method to connect to API
var crypto = require('crypto');							//crypto for md5 hash
var config = require('./config/config');		//config file for API keys 

//Variables
var key_pub = config.key_pub;
var key_priv = config.key_priv;
var time_stamp = Math.floor(new Date() / 1000);
var md5String = time_stamp + key_priv + key_pub;
var hash = crypto.createHash('md5').update(md5String).digest('hex');

//Print out message
function printMessage(character, description, attribution) {
	var message = "\n" + character + ": " + "\n" + description + "\n" +attribution;
	console.log(message);
} 

//Print out notification that description does not exist for character
function printBlankDes(character) {
	var noDescription = "\n" + character + " does not have a description.";
	console.log(noDescription);
}

//Print out error message
function printError (error) {
	console.error(error.message);
}

function get(character) {
	//Connect to the API URL
	var request = http.get("http://gateway.marvel.com:80/v1/public/characters?name=" + character +"&ts=" + time_stamp + "&apikey=" + key_pub + "&hash=" + hash, 
		  function(response){
				var body = "";
		
				//Read the data
				response.on('data', function (chunk) {
					body += chunk;
				});

				response.on('end', function(){
					if (response.statusCode === 200) {
						try {
							//Parse the data (description is in results object array)
							var characterData = JSON.parse(body);
								if (characterData["data"].results[0].description !== "") {
									//use name from response instead of name entered for correct capitalization and punctuation
									printMessage(characterData["data"].results[0].name, characterData["data"].results[0].description, characterData["attributionText"]);  
								} else { 
									printBlankDes(characterData["data"].results[0].name);
								}
						} catch (error) {
							//Parse error
							printError(error);
							console.log(response.statusCode);
						}
					} else {
						//Status code error
						printError({message: "There was an error getting the profile for " + character + ". (" + http.STATUS_CODES[response.statusCode] + ")"})
					}
				});	
	});
	//Connection error
	request.on('error', printError);
}

//Use module.exports to export function to get comic character info
module.exports.get = get; 