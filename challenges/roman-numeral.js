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



function romanNumeral(n, numeralString = '') {
  let values = {
    1000: "M",
    // 900: "CM",
    500: "D",
    // 400: "CD",
    100: "C",
    // 90: "XC",
    50: "L",
    // 40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    // 4: "IV",
    1: "I"
  }

  // Base Case
  if (n === 0) {
    return numeralString.replace(/undefined/gi, '');
  }
  // Recursion
  /**
   * If you are within [1 of the PREVIOUS character] from the next character, then 
   * do the fancy CM stuff.
   * ex: 899 -> DCCCXCIX
   * ex: 900: -> CM
   * or
   * ex: 39: XXXIX
   * ex: 40: XL
   */

  if (n > 0) {
    // Get the character if needed
    if (n >= 1000) {
      numeralString += values["1000"];
      n -= 1000;
    } else if (n >= 900) {
      // DO CM...
      // 956 would be CM...LVI
      // 921 would be CM...XXI
      // 989 would be CM...LXXXIX
      numeralString += (values["100"] + values["1000"]);
      n -= 900;
      numeralString += romanNumeral(n - 900);
    } else if (n >= 500) {
      numeralString += values["500"];
      n -= 500;
    } else if (n >= 400) {
      numeralString += (values["100"] + values["500"]);
      n -= 400;
      numeralString += romanNumeral(n - 400);
    } else if (n >= 100) {
      numeralString += values["100"];
      n -= 100;
    } else if (n >= 90) {
      // DO XC...
      numeralString += (values["10"] + values["100"]);
      n -= 90;
      numeralString += romanNumeral(n - 90);
    } else if (n >= 50) {
      numeralString += values["50"];
      n -= 50;
    } else if (n >= 40) {
      // DO XL...
      numeralString += (values["10"] + values["50"]);
      n -= 40;
      numeralString += romanNumeral(n - 40);

    } else if (n >= 10) {
      numeralString += values["10"];
      n -= 10;
    } else if (n >= 9) {
      // DO IX!
      numeralString += "IX";
      n -= 9;
    } else if (n >= 5) {
      numeralString += values["5"];
      n -= 5;
    } else if (n === 4) {
      // DO IV!
      numeralString += "IV"
      n -= 4;
    } else if (n > 0) {
      numeralString += values["1"];
      n -= 1;
    }

    return romanNumeral(n, numeralString);

  }
}

console.log(romanNumeral(0));
console.log(romanNumeral(1));
console.log(romanNumeral(3));
console.log(romanNumeral(5));
console.log(romanNumeral(9));
console.log(romanNumeral(14));
console.log(romanNumeral(49));
console.log(romanNumeral(50));
console.log(romanNumeral(51));
console.log(romanNumeral(79));
console.log(romanNumeral(99));
console.log(romanNumeral(101));
console.log(romanNumeral(454));
console.log(romanNumeral(500));
console.log(romanNumeral(552));
console.log(romanNumeral(980));
console.log(romanNumeral(1000));
console.log(romanNumeral(1002));
console.log(romanNumeral(9042));


module.exports = romanNumeral;
