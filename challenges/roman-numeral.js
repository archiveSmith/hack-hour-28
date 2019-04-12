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
    let output = "";
    const singles = {
       1: "I",
       4: "IV",
       5: "V",
       9: "IX",
      
    }
  
    const doubles = {
       10: "X",
       40: "XL",
       50: "L",
       90: "XC",
    }
    
    const triples = {
       100: "C",
       400: "CD",
       500: "D",
       900: "CM",
    }
  
    const quad = {
       1000: "M"
    }
    let numStr = n.toString()
      let track = 0;
  
      if(numStr.length >= 4){
      output = quad[1000]
        if(numStr[track] > 1){
        for(let i = 1; i < numStr[track]; i++){
         output += quad[1000]
        }
        track++;
      } 
      if(numStr.length >= 3){
        if(numStr[track] === 1){
          output += triples[100];
        } else if(numStr[track] > 4){
          for(let i = 1; i < numStr[track]; i++){
         output += triples[100]
        }
        }
      }
    
  }
}

module.exports = romanNumeral;
