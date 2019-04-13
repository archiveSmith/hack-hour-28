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
  if (binary == 0) return 0;
  let count = 0;

  binary[0] == 0 ? count += 0 : count += 1
  console.log(count);

  for (let i = 1; i < binary.length; i++) {
    if (binary[i + 1] !== undefined) {
      binary[i] == 0 ? count += 2 : count += 1
      console.log(count);
    } else {
      binary[i] == 0 ? count += 1 : count += 2
      console.log(count);
    }
  }

  return count
}

module.exports = binToDec;
