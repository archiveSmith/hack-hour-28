/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if(typeof base !== 'number') return 'not valid input!'
    
    if(base === 0) return 1;

    if(power === 1) return base;

    return base * pow(base, power - 1);
}
console.log(pow('hello', 2))
console.log(pow(0, 2));
console.log(pow(4,1));
console.log(pow(2,3));``
console.log(pow(2,5));
console.log(pow(3, 3));

function powN(base, p) {
    let result = 1;
    let power = Math.abs(p);
    while (power > 0) {
      result *= base; 
      power -= 1;
    }
    return (p < 0)? 1/result: result;
  }
  
  function powlogN(base, p) {
    let power = Math.abs(p)
    let b = base, result = 1;
    while (power > 0) {
      if ((power & 1) != 0) {
          result *= b;
      }
        power >>= 1;
        b *= b;
      }
    return (p > 0)? result : 1 /result;
  }

module.exports = pow;
