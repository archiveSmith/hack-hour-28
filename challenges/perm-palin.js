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
  const hashObj = {};
  for (let i = 0; i < str.length; i += 1) {
    hashObj[str[i]] ? hashObj[str[i]] += 1 : hashObj[str[i]] = 1;
  };
  if (str.length % 2 === 0) {
    for (let key in hashObj) {
      if (hashObj[key] % 2 === 1) return false;
    }
    return true;
  }; 
  if (str.length % 2 === 1) {
    let oneOdd = false;
    for (let key in hashObj) {
      if (hashObj[key] % 2 === 1 && oneOdd === true) {
        return false;
      } 
      if (hashObj[key] % 2 === 1 && oneOdd === false) {
        oneOdd = true;
      }
    }
  };
  return true;
};

module.exports = permPalin;


const str1 = 'ikemeqmik';
const str2 = 'mikemimike';
const str3 = '';
const str4 = 'm';

console.log('Should be true --> ', permPalin(str1));
console.log('Should be false --> ', permPalin(str2));
console.log('Should be false --> ', permPalin(str3));
console.log('Should be true --> ', permPalin(str4));