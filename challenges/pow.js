/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    // For cases dealing with 0
    if(power === 0) return 1;
    // --------------------------
    // base ** power = number times itself n number of times e.g. 5 ** 4 = 5 * 5 * 5 * 5
    else{
    return base * pow(base, power - 1);
    }
}
console.log(pow(5, 4));

module.exports = pow;
