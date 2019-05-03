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
    let record = {};
    str.split('').forEach((char)=>{
        if(record[char]) record[char] +=1;
        else record[char] = 1;
    })
	if(str.length % 2 === 0){
        for(let char in record){
            if(record[char] % 2 === 1) return false;
        }
    } else {
        let countOdd = 0;
        for(let char in record){
            if(record[char] % 2 === 1) countOdd++;
        }
        if(countOdd > 1) return false;
    }
    return true
}


module.exports = permPalin;