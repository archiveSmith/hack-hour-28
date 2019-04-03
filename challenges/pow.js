/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */
/**
 * Input: two numbers
 * Output: number
 * GS: Iterate number from 1 to power and return the value of base * base, doing ir repeatedly power times
 *  1.Using recursion
 *  2.Using while loop 
 */
function pow(base, power) {
    // base: if power is 0, return 1
    if (power === 0) {
        return 1;
    }
    // recursive case: passing base and power - 1
    return base * pow(base, power - 1);
}

//console.log(pow(3, 5));

function pow2(base, power) {
    // create a new result variable
    let result = 1;
    // iterate number from power to 1
    while(power--) {
        // result will be multiply by base
        result *= base;
    }
    // return the result
    return result;
}
//console.log(pow2(3, 5))
module.exports = pow;
