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

    let decimal = parseInt(binary, 2);
    // let numbered = parseInt(binary);
    // let bin =  numbered.toString(2)
    // let arr = bin.split('');
    // console.log(arr);
    // let count = 0;
    // arr.forEach(el => {
    //     if (el === '1') {
    //         count++;
    //     }
    // })
    return decimal
}

console.log(binToDec('0101'))

module.exports = binToDec;
