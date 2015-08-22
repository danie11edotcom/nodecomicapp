//Require Section
var comic = require('./comic');
var print = require('./print');

var characters = process.argv.slice(2);
characters.forEach(comic.get);
comic.attr('spider-man');