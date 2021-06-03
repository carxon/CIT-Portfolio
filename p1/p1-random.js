/*
    CIT 281 Project 1
    Name: Your Name
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var randString = ""

for (let i = 0; i < getRandomInteger(5, 26); i++) {
    let randLetter = letters[Math.floor(Math.random() * letters.length)];    
    var randString = randString + randLetter;
}

console.log(randString);