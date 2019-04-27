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
  if (str.length === 0) return false;
  if (str.length === 1) return true;

  const strArr = str.split('');
  const letters = {}

  for (let i = 0; i < strArr.length; i++) {
    if (!letters[strArr[i]]) {
      letters[strArr[i]] = 0;
    }
    letters[strArr[i]] += 1;
  }

  let oneOdd = false;

  for (let prop in letters) {
    if (oneOdd && (letters[prop] === 1 || letters[prop] % 2 === 1)) {
      return false;
    } else if (letters[prop] % 2 === 1) {
      oneOdd = true;
    }
  }

  return true;
}

module.exports = permPalin;