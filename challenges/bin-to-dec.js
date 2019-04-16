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

function binToDec(binary, sum = 0, itars = 0) {
  const binaryConversionLength = {
    0: 1,
    1: 2,
    2: 4
  };
  // if (binary === '0') return 0;
  if (binary.length === 0) {
    return sum;
  }
  // recursively call?
  const binaryLength = binary.length; //2

  // gives current binary character
  const currentBinary = binary.slice(-1); // 1

  // new binary array to work with
  const newBinary = binary.slice(0, binaryLength - 1); // '1'

  const newSum = (currentBinary == 1) ? binaryConversionLength[itars.toString()] : 0;

  return binToDec(newBinary, sum += newSum, itars += 1);
}

module.exports = binToDec;