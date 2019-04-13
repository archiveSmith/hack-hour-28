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
/**
 * 
 * @param {*} binary string
 * Output: Number
 * 
 */

function binToDec(binary) {
    let decimal = parseInt(binary, 2);
    //console.log(decimal);
    return decimal;
}

// console.log(binToDec('0')); //   -> 0
// console.log(binToDec('11')); //  -> 3
// console.log(binToDec('100')); // -> 4
// console.log(binToDec('101')); // -> 5
// console.log(binToDec('0101')); // -> 5

function decToBin (dec) {
    return (dec >>> 0).toString(2);
}

// console.log(decToBin(5));
// console.log(decToBin(3));
// console.log(decToBin(4));
// console.log(decToBin(2));
// console.log(decToBin(0));


module.exports = binToDec;
