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
  let nums = binary.split('');
  let total = 0;
  let power = 0;
  //Reverse the array.
  let reverseNums = nums.reverse();

  for(let i = 0; i < reverseNums.length; i++)
  {
    if(reverseNums[i] === '1')
    {
      total += Math.pow(2, power);
    }
    power++;
  }
  return total;
}

module.exports = binToDec;
