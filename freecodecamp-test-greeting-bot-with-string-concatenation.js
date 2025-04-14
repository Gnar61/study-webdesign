//IMPORTANT! Language order of comments are English, Dutch, French (I'm Belgian so it's useful to showcase I can use all three languages) if the english spelling is the same as french you will only see two

// greeting/begroeting/salutation
console.log("Hello! I'm your coding fun fact guide!"); 

// variables/variabelen
let botName = "Professor Bot"; 
let botLocation = "Internet";
let favoriteLanguage = "JavaScript";

// introduction/introductie
console.log("My name is " + botName + " and I live on " + botLocation + "."); 

// fun fact/grappige feit/fait amusant
console.log("My favorite programming language is " +favoriteLanguage+".");
let codingFact = "FUN FACT about " +favoriteLanguage+ ": The real name is not “Javascript”, but ECMAScript."; 
console.log(codingFact);

// reassign codingFact to new fun fact / nieuwe grpapige feit toewijzen aan codingFact / réaffecter une nouveaux fait amusant à codingFact
codingFact = "New fun fact about " + favoriteLanguage + ": NaN (not a number) despite what its acronym means, its typeof is ‘Number’.";
console.log(codingFact);

codingFact = "Second new fun fact about " + favoriteLanguage + ": “undefined” is not a reserved word. Therefore, “undefined” can be defined, and although “null” is the total absence of value, in Javascript, “null” is an object.";
console.log(codingFact);

console.log("It was fun sharing these facts with you. Goodbye! - "+botName+ " from "+botLocation+".");
