/*
    CIT 281 Project 1
    Name: Carrington Powell
*/
let d = new Date();
let dates = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',]
let w = d.getDay();
let currentDay = dates[w];
console.log(currentDay);

// condition ? expressionIfTrue : expressionIfFalse