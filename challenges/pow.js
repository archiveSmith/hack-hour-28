/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, counter = 1 ) {
    if (power === 0) return 1; 
    if (power === 1) return base; 
    if (counter === power) return base;
    return pow(base += base, power, counter += 1)
}


module.exports = pow;
