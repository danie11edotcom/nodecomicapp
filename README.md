# Command Line Marvel Comic App
Command line application to retrieve Marvel comic character descriptions using the Marvel API built with Node.js

## How It Works
- Open terminal/command line to project directory
- Enter node app.js and the name of one or more Marvel comic characters separated by a single space. 
```javascript
node app.js hulk
```
- The app will retrieve the character description if a valid name is entered.
Note: Character names with spaces have to be in double quotes.

## Sample Images
-	![Command to find description for Hulk](https://github.com/danie11edotcom/nodecomicapp/blob/master/img/commandPrompt1.PNG "Find description for Hulk")
-	![Results for Hulk](https://github.com/danie11edotcom/nodecomicapp/blob/master/img/commandPrompt2.PNG "Description results for Hulk")
-	![Command to find description for Hulk and Spider-Man](https://github.com/danie11edotcom/nodecomicapp/blob/master/img/commandPrompt3.PNG "Find description for Hulk and Spider-Man")
-	![Results for Hulk and Spider-Man](https://github.com/danie11edotcom/nodecomicapp/blob/master/img/commandPrompt4.PNG "Description results for Hulk and Spider-Man")

## Requirements
-	[Node.js](https://nodejs.org/) - this project uses v.0.12.7
-	[Marvel API](http://developer.marvel.com/docs) public and private keys

### Future Improvement Ideas
- List Marvel attribution once when multiple names are entered
- Include a prompt to search multiple times without having to enter node app.js each time
