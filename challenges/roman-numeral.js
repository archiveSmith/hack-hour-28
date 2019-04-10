/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
  let num = n, output = '';
  let romanNums = new Map([[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [50, "L"], [40, "XL"], [10, "X"], [5, "V"], [4, "IV"], [1, "I"]])

  for (let [key, value] of romanNums) {
    while (num >= key) {
      num -= key;
      output += value;
    }
  }
  
  return output;
}
  

module.exports = romanNumeral;

// console.log(romanNumeral(13));