# Command Line Marvel Comic App
Command line application to retrieve Marvel comic character descriptions using the Marvel API built with Node.js

## How it works
1. Open terminal/command line to project directory
2. Enter node app.js and the name of one or more Marvel comic characters separated by a single space. 
```javascript
node app.js hulk
```
3.	The app will retrieve the character description if a valid name is entered.
Note: Character names with spaces have to be in double quotes
	-	![Command to find description for Hulk](./img/commandPrompt1.png "Find description for Hulk")
	-	![Results for Hulk](./img/commandPrompt2.png "Description results for Hulk")
	-	![Command to find description for Hulk and Spider-Man](./img/commandPrompt3.png "Find description for Hulk and Spider-Man")
	-	![Results for Hulk and Spider-Man](./img/commandPrompt4.png "Description results for Hulk and Spider-Man")

## Requirements
-	[Node.js](https://nodejs.org/) - this project uses v.0.12.7
-	[Marvel API](http://developer.marvel.com/docs) public and private keys

### Future Improvement Ideas
- List Marvel attribution once when multiple names are entered
- Include a prompt to search multiple times without having to enter node app.js each time
