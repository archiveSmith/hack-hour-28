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
    let letterCount = {};
    let countOdds=0;
    for (let i =0; i<str.length; i++) {
        if (letterCount[str[i]] === undefined) {
          letterCount[str[i]] = 1;
        } else {
        letterCount[str[i]] += 1;
        }
    }
    let values = Object.values(letterCount);
    for (let j=0; j<values.length; j++) {
      if (values[j]%2===1) {
        countOdds++;
      }
    }
    if (countOdds===1) return true;
    else if (countOdds%2===1) return false
    return true;
}

module.exports = permPalin;