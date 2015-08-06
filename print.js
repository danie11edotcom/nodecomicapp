//Print functions

var print = {
    //Print attribution
    printAttribution: function (attribution) {
        var message = attribution;
        console.log(attribution);
    },
    //Print character name, description and attribution
    printMessage:       function (character, description, attribution) {
        var message = "\n" + character + ": " + "\n" + description + "\n" + attribution;
        console.log(message);
    },

    //Print out notification that description does not exist for character
    printBlankDes:      function (character) {
        var noDescription = "\n" + character + " does not have a description.";
        console.log(noDescription);
    },
    //Print out error message
    printError:             function (error) {
        console.error(error.message);
    }
};

module.exports = print;
