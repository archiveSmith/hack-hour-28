/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
    if(!str.length) return false;

    if(str.length === 1) return true;

    let arr = [];
    const split = str.split('');
    if(split.length % 2 === 0) {
        for(let i = 0; i < split.length; i += 1) {
            if(!arr.includes(split[i])) {
                arr.push(split[i]);
            } else {
                let index = arr.indexOf(split[i]);
                arr.splice(index, 1);
                // console.log(arr);
            }
        }
        return arr.length === 0 ? true : false;
    } else {
        for(let i = 0; i < split.length; i += 1) {
            if(!arr.includes(split[i])) {
                arr.push(split[i]);
            } else {
                let index = arr.indexOf(split[i]);
                arr.splice(index, 1);
            }
        }
        return arr.length === 1 ? true : false;
    }
    
}

// console.log(permPalin('abab')) // true
// console.log(permPalin('cbaba')) // true
// console.log(permPalin('cbac')) // false
// console.log(permPalin('a')) // true

module.exports = permPalin;