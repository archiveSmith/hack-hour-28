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
  let parsed = parseInt(binary, 2);
  console.log(parsed)
}

function decToBin(decimal){
  let manipulatedDecimal = decimal;
  let binaryArray = [];
  let remainder = 0;
  while(manipulatedDecimal >= 2){
    remainder = manipulatedDecimal % 2;
    binaryArray.push(remainder);
    manipulatedDecimal = (manipulatedDecimal - remainder) / 2;
  }
  binaryArray.push(manipulatedDecimal);
  return binaryArray.reverse().join("");
}

module.exports = binToDec;
console.log(binToDec('101'))
console.log(decToBin(5))
