# Command Line Marvel Comic App
Command line application to retrieve Marvel comic character descriptions using the Marvel API built with Node.js

## Getting Started
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

## Requirements
-	[Node.js](https://nodejs.org/) - this project uses v.0.12.7
-	[Marvel API](http://developer.marvel.com/docs) public and private keys

### Future Improvement Ideas
- [ ] List Marvel attribution once when multiple names are entered
- [ ] Include a prompt to search multiple times without having to enter node app.js each time
