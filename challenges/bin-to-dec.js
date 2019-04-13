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

// function binToDec(binary) {
//   let currentNum = 1;
//   const binArr = binary.split("");
//   return binArr.reduceRight((dec, bit) =>{
//     if(bit === "1") dec += currentNum;
//     currentNum = currentNum * 2;
//     return dec;
//   },0)
//
// }


function binToDec(binary) {
  let currentNum = 1;
  let finalDec = 0;
  for(let i = binary.length - 1; i >= 0; i -= 1){
    if(binary[i] === '1') finalDec += currentNum;
    currentNum *= 2;
  }
  return finalDec;
}

module.exports = binToDec;
