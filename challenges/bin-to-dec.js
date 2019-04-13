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
  // binary starts at zero
  // declare binary + '' to turn into String
  // assign length - 1 to var exponent
  let decimal = 0;
  let binStr = binary + "";
  while (binStr) {
    if (binary % 2 !== 0) {
      decimal += 1;
      binStr = Number(binStr) - 1 + ""; //?
    }
    binStr = Number(binStr) + ""; //?
    let power = binStr.length - 1; //?
    decimal = decimal += Math.pow(2, power);
    binStr.slice(1); //?
  }
  return decimal;
}

binToDec(101); //?

module.exports = binToDec;
