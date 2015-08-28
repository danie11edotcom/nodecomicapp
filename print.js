//Print functions

var print = {
	//Print attribution
	printAttribution:  function (attribution) {
		var message = "\n" + attribution;
		console.log(message);
	},
	//Print character name (text style: bold cyan), description and attribution
	printMessage:  function (character, description) {
		var message = "\n" + "\x1b[36;1m" + character  + "\x1b[0m" + ": " + "\n" + description;
		console.log(message);
	},

	//Print out notification that description does not exist for character
	printBlankDes:  function (character) {
		var noDescription = "\n" + character + " does not have a description.";
		console.log(noDescription);
	},
	//Print out error message in red text then reset color
	printError:  function (error) {
	console.error("\n" + "\x1b[31m" + error.message + "\x1b[0m");
	}
};

module.exports = print;
