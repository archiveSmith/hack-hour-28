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
    if(Number(binary) === 0) {
        return 0;
    }
    // get the length of string.
    const binString = binary.length;
    let pow = Math.pow(2, binString - 1);
    // exponent will be 2 base to length power.
    
    // split binary into an array
    let decimalReturn = 0;
    // iterate through array if the number is 1 then pow + decimalReturn
    // keep dividing the next element by 2
    let split = binary.split('');
    for(let i = 0; i < split.length; i++) {
        if(Number(split[i]) === 1) {
            decimalReturn += pow;
            // console.log(decimalReturn)
        } 
        pow = pow/2;
    }
    return decimalReturn;
}

console.log(binToDec('0')) // 0
console.log(binToDec('11')) //3
console.log(binToDec('100')) // 4
console.log(binToDec('101')) // 5
console.log(binToDec('0101')) // 5
console.log(binToDec('10101101')) // 173 


module.exports = binToDec;
