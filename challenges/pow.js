/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {

if (power === 0) {
    return 1
}

const arrayOfVals = [];
for (let i = Math.abs(power); i > 0; i--) {
    arrayOfVals.push(base)
    }
return arrayOfVals.reduce(function(acc,cv) {
    return (acc = acc * cv)
    });
}

module.exports = pow;


console.log(pow(1,2)) // 
console.log(pow(3,3)) //
console.log(pow(1,1))
console.log(pow(100,0))