/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  let arr = (binary.split(''));
  let sum = 0;
  let digit = 1;
  while (arr.length > 0) {
    sum += arr[arr.length - 1] * digit;
    digit *= 2;
    arr = arr.slice(0, arr.length - 1)
  }
  return sum;
}

console.log(binToDec('0'))   // 0
console.log(binToDec('11'))  // 3
console.log(binToDec('100')) // 4
console.log(binToDec('101')) // 5
console.log(binToDec('0101')) // 5
console.log(binToDec('111110101')) // 5
module.exports = binToDec;
