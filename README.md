# Marvel Comic Command Line App
Node.js command line application to retrieve Marvel comic character descriptions using the Marvel API 

## Requirements
-	[Node.js](https://nodejs.org/) - this project uses v.0.12.7
-	[Marvel API](http://developer.marvel.com/docs) public and private keys

## How It Works
- Download latest version of Node.js, if needed
- Download the Zip file of the project
- Create a directory in the root project directory named config
- Create a file called config.js inside the config directory
- Sign up for a Marvel Developer account and get a public and private API key
- Inside the config.js file declare and initialize a global variable called config and export the module as follows:
```
var config = {
	key_pub:  //public API key,
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

## App Preview
Preview of app showing results for Hulk, Spider-Man, Iron Man, Wolverine and Hawkeye
![App preview showing results for Hulk, Spider-Man, Iron Man, Wolverine and Hawkeye](https://github.com/danie11edotcom/nodecomicapp/blob/master/img/nodeapppreview.gif)

### Future Improvement Ideas
- [ ] Review [console-png](https://www.npmjs.com/package/console-png) for potential use with
- [ ] Review node.js module chalk as an alternative to ANSI escape codes for string styling
- [ ] Include a prompt to search multiple times without having to enter node app.js each time
- [ ] Remove Marvel attribute on error message
- [ ] Update error message with clearer descriptions regarding type of error (parse, connection, status code, etc)
