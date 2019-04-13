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
	if (typeof binary !== "string") {
		const inputToStr = binary.toString();
		return parseInt(inputToStr, 2);
	}
	return parseInt(binary, 2);
}

const hexaToDec = (string => {
	if (typeof string !== "string") {
		const inputToStr = string.toString();
		return parseInt(inputToStr, 2);
	}
	return parseInt(string, 16)
})

//console.log(binToDec(1))
console.log(binToDec('0'))   //-> 0
console.log(binToDec('11'))  //-> 3
console.log(binToDec('100')) //-> 4
console.log(binToDec('101')) //-> 5
console.log(binToDec('0101'))

console.log(hexaToDec('0'))   //-> 0
console.log(hexaToDec('11'))  //-> 3
console.log(hexaToDec('100')) //-> 4
console.log(hexaToDec('101')) //-> 5
console.log(hexaToDec('0101'))

module.exports = binToDec;
