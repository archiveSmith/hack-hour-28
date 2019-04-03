/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

//(2, 3) 2 * 2 = 4 * 2

function pow(base, power, result = base) {
//if statement to check when it reaches a certain number then return the answer
//as the power increases base stays the same
//base * base = result * base 
    if (power === 1) return result;
    if (power === 0) return 0;
    result = base * result;
    power --
    return pow(base, power, result)
}




console.log(pow(2, 1))

module.exports = pow;
