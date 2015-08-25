# Command Line Marvel Comic App
Command line application to retrieve Marvel comic character descriptions using the Marvel API built with Node.js

## Requirements
-	[Node.js](https://nodejs.org/) - this project uses v.0.12.7
-	[Marvel API](http://developer.marvel.com/docs) public and private keys

## How It Works
- Download latest version of Node.js, if needed
- Sign up for a Marvel Developer account and get a public and private API key
- Download the Zip file of the project
- Create a directory in the root project directory named config
- Create a file called config.js inside the config directory
- Inside the config.js file declare and initialize a global variable called config and export the module as follows:
```
var config = {
	key_pub:  //public API key
	key_priv: //private API key
};

module.exports = config;
```
- Open terminal/command line to project directory
- Enter node app.js and the name of one or more Marvel comic characters separated by a single space. 
```javascript
node app.js hulk
```
- The app will retrieve the character description if a valid Marvel character name is entered.

Note: Character names with spaces have to be in double quotes.

## Sample Images
Command to enter to find description for Hulk
![Command to find description for Hulk](https://github.com/danie11edotcom/nodecomicapp/blob/master/img/commandPrompt1.PNG "Find description for Hulk")

Description results for Hulk
![Results for Hulk](https://github.com/danie11edotcom/nodecomicapp/blob/master/img/commandPrompt2.PNG "Description results for Hulk")

Find description for Hulk and Spider-Man
![Resulsts for Hulk and Spider-Man](https://github.com/danie11edotcom/nodecomicapp/blob/master/img/commandPrompt3.PNG "Description results for Hulk and Spider-Man")

Description results for Iron Man and Wolverine
![Results for Iron Man and Wolverine](https://github.com/danie11edotcom/nodecomicapp/blob/master/img/commandPrompt4.PNG "Description results for Iron Man and Wolverine")

Results for Hawkeye (valid Marvel character with no description provided by Marvel)
![Results for Hawkeye](https://github.com/danie11edotcom/nodecomicapp/blob/master/img/commandPrompt5.PNG)

### Future Improvement Ideas
- [ ] Include a prompt to search multiple times without having to enter node app.js each time
