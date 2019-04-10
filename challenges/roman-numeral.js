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
  const romanNums = [
    [, "M", "MM", "MMM", "MV", "V", "VM", "VMM", "VMMM", "VV"],
    [, "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    [, "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    [, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
  ];

  let numStr = ("" + n).split("");
  let romanStr = "";
  for (let i = numStr.length - 1; i >= 0; i -= 1) {
    let romanIndex = parseInt(numStr[i]);
    let concatRoman = romanNums[i][romanIndex] || "";
    romanStr = concatRoman + romanStr;
  }
  return romanStr;
}

romanNumeral(8580); //?

module.exports = romanNumeral;
