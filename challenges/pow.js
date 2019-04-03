/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {

    if(power === 1) return base;
    if(power !== 1) return base *= pow(base, power - 1);

    //return pow(base, power - 1)

    // const foundation = base;
    // let output;
    // function multiply(b) {
    //     output = b * base;
        
    // }
}

console.log(pow(2,1)) // expect 3
console.log(pow(2,2)) // expect 9
console.log(pow(2,3)) // expect 27
console.log(pow(2,4)) // expect 81
console.log(pow(2,5)) // expect 81
console.log(pow(2,6)) // expect 81
module.exports = pow;
