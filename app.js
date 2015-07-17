//Prepare
//Problem:  A simple way to find Marvel comic character descriptions is needed
//Solution: Build a command line app to retrieve Marvel character summary for given name using Node.js and Marvel API

//Plan
//Connect to the API URL (http://gateway.marvel.com/v1/public/characters)
//Read the data (description is in results array -->results.description?)
//Parse the data
//Print data and Marvel's attribution ('Data provided by Marvel. (c) 2014 Marvel')

//test config file reading for API keys

var config = require('config/config.json');
//var keys = JSON.parse(config);
//console.log(config.test);
//console.log('Hello world');