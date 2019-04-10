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

 /**
  * 
  * @param {*} n number
  * output: string
  * 
  */
function romanNumeral(n) {
    const decimal = [1000, 500, 100, 50, 10, 5, 1];
    const roman = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    let result = '';

    // if input n is not a number, return NaN
    if(isNaN(n)) return NaN

    // iterate the array
    for(let i = 0; i <= decimal.length; i += 1) {
        // keep trying the same number until it won't fit anymore
        while(n % decimal[i] < n) {
            // add the matching roman character to the result 
            result += roman[i];
            // remove the decimal value of the roman number from the number
            n -= decimal[i];
        }
    }
    return result;
    
}
// console.log(typeof n)
// console.log(romanNumeral(22))

module.exports = romanNumeral;
