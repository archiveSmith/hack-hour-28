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
  let decimal = 0;
  let length = binary.length - 1;

  for (let i = 0; i < binary.length; i++) {
    decimal += binary[i] * Math.pow(2, length);
    length--;
  }

  return decimal;
}

function decToBin(decimal) {
  let remainder = [];
  let quotient = decimal;

  while (quotient > 0) {
    remainder.unshift(quotient % 2);
    quotient = Math.floor(quotient / 2);
  }

  return remainder.join("");
}

function decToHex(decimal) {
  let decHex = [];
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let quotient = decimal;

  if (decimal < 16) return hex[decimal];

  while (quotient > 0) {
    decHex.unshift(hex[Math.floor(quotient % 16)]);
    quotient = Math.floor(quotient / 16);
  }

  return decHex.join("");
}

// console.log(binToDec("0101"));
// console.log(decToBin(174));
// console.log(decToHex(25));
module.exports = binToDec;
