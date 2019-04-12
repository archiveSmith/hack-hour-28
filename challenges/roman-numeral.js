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
  const romanMap = {

  }
  const num = [];
  while (n > 0) {
    const digit = n % 10; //?
    num.push(digit);
    n = Math.floor(n / 10);
  }
  let romanDigits = '';

  function createDigits(num) {
    let output = ''
    if (num < 1) {
      output += 'X';
    }
    if (num < 4) {
      while (num > 0) {
        output += 'I';
        num--;
      }
    }
    if (num === 4) {
      output += 'IV';
    }
    if (num === 5) {
      output += 'V';
    }
    if (num === 6) {
      output += 'VI';
    }
    if (num === 7) {
      output += 'VII'
    }
    if (num === 8) {
      output += 'VIII'
    }
    if (num === 9) {
      output += 'IX'
    }
    return output;
  }
  console.log(createDigits(num[0]))

  // for (let i = 0; i < numDigits.length; i++) {

  // }
}

console.log('romanNumeral: ', romanNumeral(1128));


module.exports = romanNumeral;