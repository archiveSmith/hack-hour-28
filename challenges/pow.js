/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, product) {

  if (power === 0) {                              // 0 exponent: Any number ^ 0 === 1
    return 1} 
  if (power < 0){                                 // Negative exponent: A num ^ -x === 1/num ^ x
    base = 1/base;
    power *= -1
  }

  if (product === undefined){product = base}    

      if (power === 1)                            // 1 Exponent: A num ^ 1 = itself
        {return product}           
      product = product*base;   
      power--;

    return pow(base, power, product)              // Recusively return pow until power = 1;
}

module.exports = pow;
