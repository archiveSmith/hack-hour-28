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
    //check to see if n is a number
    if(typeof n !== 'number') return false;
    //create array for the numbers
  	let numbersArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 2, 1];
    //create array for numerals
  	let romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'II' ,'I'];
    let romanNumber = ''
    //run a for loop through numbersArray
    for (let i = 0; i < numbersArray.length; i++) {
        //find the number that best matches the number given in the array
      while(numbersArray[i] <= n) {
          //set the empty string equal to that index in the romanNumerals array
        romanNumber = romanNumerals[i];
        //n = n - numbersArray[i]
        //example 400 = 400 - 400;
        n -= numbersArray[i]
      }
    }
    //return the string that best matches the number given
    return romanNumber;
}

module.exports = romanNumeral;
