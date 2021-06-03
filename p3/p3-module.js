module.exports = {
    coinCount
};


const validDenomination = (coin) => { return [1, 5, 10, 25, 50, 100].indexOf(coin) !== -1; }

const valueFromCoinObject = (obj) => {
    const { denom = 0, count = 0 } = obj;
    return denom * count;
}

const valueFromArray = (arr) => {
    return arr.reduce( (total, adder) => {
        return total += valueFromCoinObject(adder)
    }, 0);

}

/*code insparation from stack overflow
$scope.sum = function(items, prop){
    return items.reduce( function(a, b){
        return a + b[prop];
    }, 0);
};
*/

const coinCount = (...coinage) => {
    return valueFromArray(coinage)
}

console.log("{}", coinCount({denom: 5, count: 3}));
console.log("{}s", coinCount({denom: 5, count: 3},{denom: 10, count: 2}));
const coins = [{denom: 25, count: 2},{denom: 1, count: 7}];
console.log("...[{}]", coinCount(...coins));