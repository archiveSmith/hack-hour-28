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

const binToDec = (binary) => {
    if(binary == 0){
      return 0
    }
  
    let power = binary.length-1;
    let strArr = binary.slice()
    let runningTotal = 0;
   
  
    for(let i = 0; i < strArr.length; i++){
      if(strArr[i] === "1"){
      runningTotal += Math.pow(2, power)
      }
        power--;
    }
    return runningTotal
  }

module.exports = binToDec;
