const readlineSync = require('readline-sync');

var your = readlineSync.question('You choose (rock, paper, scissors): ');

//var  = prompt("Do you choose rock, paper or scissors?");
var other = Math.random();
if (other < 0.34) {
    other = "rock";
} else if (other <= 0.67) {
    other = "paper";
} else {
    other = "scissors";
}
console.log("Computer " + other);

var compare = function(you, notYou) {
    if (you === notYou) {
        return "No winner";
    } else if (you === "rock") {
        if (notYou === "scissors") {
            return "you win";
        } else {
            return "you lose";
        }
    } else if (you === "paper") {
        if (notYou === "rock") {
            return "you win";
        } else {
            return "you lose";
        }
    } else if (you === "scissors") {
        if (notYou === "paper") {
            return "you win";
        } else {
            return "you lose";
        }
    }
}
console.log(compare(your, other));