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
    console.log(`Test String:${str}`);
    let countObj = {}
    let strArray = str.split('');

    let strEven = str.length % 2 === 0;

    strEven

    strArray.forEach(letter => {
        if(countObj[letter]){
            countObj[letter]++;
        }else{
            countObj[letter] = 1;
        }
    });

    countObj;

    let oddArray = [];

    for (const letter in countObj) {
        if (countObj.hasOwnProperty(letter)) {
            const count = countObj[letter];
            if(count % 2 === 1) oddArray.push(letter);
        }
    }

    //even length str with odd letter count
    if(strEven && oddArray.length != 0) return false; 

    //even length str with no odd letter counts
    if(strEven && oddArray.length === 0) return true; 

    //Odd string length with only 1 odd character
    if(!strEven && oddArray.length === 1) return true;

    //Odd string length and more than 1 odd chacters
    if(!strEven && oddArray.length !== 1) return false;

    console.log("Default - we shouldn't get here");
    return false
}


// out = permPalin('cbaba')// => true
// out
// out = permPalin('cbac') //=> false
// out

// out = permPalin('bbaa') 
// out
// out = permPalin('a')
// out

module.exports = permPalin;