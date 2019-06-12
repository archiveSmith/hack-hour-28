/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {

  // Number of digits corresponds to power of 2 
  // ex. 1000 = 2x2x2x2, 10000 = 2x2x2x2x2
  // Each additional 1 corresponds to another power of 2
  // Calculate index of each additional 1 and add that power of 2 to total
  
  let binString = binary.toString();
  // Find first 1 digit in case given binary is prefixed with 0s
  for (let j = 0; j < binString.length; j++){
    if (binString[j] === '1') {
     binString = binString.slice(j)
      
      break;
    }
  }
  console.log(binString)
  let dec = 0;
  let digits = binString.length;
  //iterate through stringified number and add power of 2 for its index subtracted from total length - 1
  for (let i = 0; i < digits; i++) {
  
    if (binString[i] === '1') {
      dec += Math.pow(2, digits - i - 1)
    }
  }
 return dec;
}
console.log(binToDec(01010))
module.exports = binToDec;
