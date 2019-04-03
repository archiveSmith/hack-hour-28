/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if(typeof base !== 'number') return 'not valid input!'
    
    if(base === 0) return 0;

    if(power === 1) return base;

    return base * pow(base, power - 1);
}
console.log(pow('hello', 2))
console.log(pow(0, 2));
console.log(pow(4,1));
console.log(pow(2,3));
console.log(pow(2,5));
console.log(pow(3, 3));

module.exports = pow;
