//Prepare
//Problem:  A simple way to find Marvel comic character descriptions is needed
//Solution: Build a command line app to retrieve Marvel character summary for given name using Node.js and Marvel API

function printMessage(character, description) {
	var message = character + "'s description is: " + description;
	console.log(message);
}

//Plan
//Connect to the API URL (http://gateway.marvel.com/v1/public/characters)
//Read the data (description is in results array -->results.description?)
//Parse the data
//Print data and Marvel's attribution ('Data provided by Marvel. (c) 2014 Marvel')

//Use module.exports to export function to get comic character info


printMessage("Spider-Man", "He's a really cool dude!");