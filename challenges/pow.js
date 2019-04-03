/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if(power === 0) return 1;
    if(power === 1) return base;
    if(power !== 1) return base *= pow(base, power - 1);

    //return pow(base, power - 1)

    // const foundation = base;
    // let output;
    // function multiply(b) {
    //     output = b * base;
        
    // }
}

// console.log(pow(1,0)) // expect 3
// console.log(pow(-4,2)) // expect 9
// console.log(pow(-4,3)) // expect 27
// console.log(pow(-4,4)) // expect 81
// console.log(pow(-4,5)) // expect 81
// console.log(pow(-4,6)) // expect 81
module.exports = pow;
