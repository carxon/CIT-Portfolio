/*
    CIT 281 Project 2
    Name: Carrington Powell
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";
let resulte = "";

//return a single, random, lowercase letter
//const randLet = getRandomLetter() {alphabet[getRandomInteger(1, alphabet.length-1)];}

const getRandomLetter = function() { let randLet = alphabet[getRandomInteger(1, alphabet.length-1)] 
    return randLet;
}


for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += getRandomLetter();
}

//returns The random length string
const getRandomString = function(minLength, maxLength) {
    for (let i = 0; i < getRandomInteger(minLength, maxLength); i++) {
        resulte += getRandomLetter();
    }
    return resulte;
}

//return a string in ascending order
const getSortedString = function(string) {return string.split('').sort().join('');}

console.log(result);
console.log(getRandomString(10, 20));
console.log(getSortedString(resulte))