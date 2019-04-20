var readline = require('readline-sync');
var color = require('colors')
var name = "";
var age = 0;
var hometown = ""

do {
    name = readline.question("> What \'s your name? "); 
} while (name.length == 0);

do {
    age = readline.question("> What \'s your year of birth? ");
} while (!Number.isInteger(parseInt(age)));

do {
    hometown = readline.question("> What \'s your hometwon? ")
} while(hometown.length == 0)

var currentTime = new Date()
// console.log("Thank you. Hello " + name + ", nice to meet you." + age + " " + hometown);
console.log("Thank you. Hello " + `${name}`.red + ", so you are " + `${currentTime.getFullYear() - age}`.blue + " year old and from " + hometown.green)
