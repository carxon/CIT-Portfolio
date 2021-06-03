/*
    CIT 281 Lab 2
    Name: Carrington Powell
*/
function square(num) {
    return num*num;
}
console.log('Square operations:')
for (let p = 2; p <= 10; p+=2) {
    console.log(`Square of ${p} is ${square(p)}`);
}

console.log(`Square of 20 is ${square(10)}`);