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
  const HASH = {};
  let count = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (!HASH[str[i]]) HASH[str[i]] = 1;
    else HASH[str[i]] += 1;
  }

  for (k in HASH) {
    if (HASH[k] % 2 !== 0) count += 1;
    if (count > 1) return false;
  }

  return true;
} // => true

module.exports = permPalin;
