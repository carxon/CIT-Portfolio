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
function getRandomLetter() {
    let randLet = alphabet[getRandomInteger(1, alphabet.length-1)];
    return randLet;
}

//returns The random length string
function getRandomString(minLength, maxLength) {
    for (let i = 0; i < getRandomInteger(minLength, maxLength); i++) {
        result += getRandomLetter();
    }
    return result;
}

//return a string in ascending order
function getSortedString(string) {
    return string.split('').sort().join('');
}

console.log(result);
console.log(getRandomString(10, 20));
console.log(getSortedString(result))