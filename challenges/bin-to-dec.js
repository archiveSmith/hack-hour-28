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

// input: '0101'
function binToDec(binary) {
  let dec = 0;
  let revBinArray = binary.split('').reverse().map(elt => Number(elt)); // 1010
  revBinArray.forEach((bit, ind) => {
    dec += bit * Math.pow(2, ind);
  });
  return dec;
}

console.log(binToDec('0101'));
console.log(binToDec('100'));
console.log(binToDec('1000010'))

module.exports = binToDec;
