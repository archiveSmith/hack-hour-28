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
    const array = binary.split('');
    let result = 0;
    let place = 1;
    const base = 2;
    let index = array.length - 1;

    while (index >= 0) {
        result += parseInt(array[index]) * place;
        place = place * base;
        index--;
    }

    return result;

}


function decToBin(dec){
    return dec.toString(2);
}

function decToHex(dec){
    return dec.toString(16);
}


module.exports = binToDec;
