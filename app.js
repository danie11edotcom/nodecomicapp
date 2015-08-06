//Require Section
var comic = require('./comic');
var print = require('./print');

var characters = process.argv.slice(2);
characters.forEach(comic.get);

//Improvement Ideas
	//Add prompt to allow user to continue to interact with app
	//Create separate module for print functions and require those in comic.js
	//Print attribution once for multiple character names printed