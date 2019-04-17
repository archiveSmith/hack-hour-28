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
    let start = binary.length - 1;
    let arr = binary.split('');

    return arr.reduce((acc, value)=>{
        return acc += parseInt(value)*Math.pow(2, start--)
    },0)
}

function DectoBin(decimal){

}
console.log(binToDec('0001000'))
console.log(parseInt('1'))
console.log('01001'.split(''))

module.exports = binToDec;
