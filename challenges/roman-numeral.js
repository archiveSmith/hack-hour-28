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
  let lookUp = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  let rom = '';

  for(let x in lookUp)
  {
    //while number is >= value in lookup object.
    while(n >= lookUp[x])
    {
      //Add to empty Roman string.
      rom += x;
      //Subtract and update input number from value in lookUp object.
      n -= lookUp[x];
    }
  }
  //Return converted number.
  return rom;
}

console.log(romanNumeral(5));
console.log(romanNumeral(901));

module.exports = romanNumeral;
