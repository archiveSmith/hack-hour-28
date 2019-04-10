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
const romans = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400, 
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9, 
  V: 5,
  IV: 4,
  I: 1
}

//work with n = 3 --> expected output: III

for (let key in romans) {
  if (romans[key] === n) {
    return key;
  }
}

let arr = Object.keys(romans); //[ M , CM, D, CD ...]
let a = n;   
let str = '';
for (let i = 0; i< arr.length; i++) {
  if (a >= romans[arr[i]]) {
    a -= romans[arr[i]] // a = 747 - 500 = 247 - 100 = 147 = 57 
    str += arr[i]; 
    i = 0;
  }
}
return str;
}

console.log(romanNumeral(90));
console.log(romanNumeral(100));
console.log(romanNumeral(546));
console.log(romanNumeral(747));



module.exports = romanNumeral;
