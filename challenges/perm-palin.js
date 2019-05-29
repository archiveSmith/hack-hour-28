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
  let counts = {};
  for (let char of str) {
    if (!(char in counts)) {
      counts[char] = 0;
    }
    counts[char]++;
  }

  // If it's a palindrome, every count must be even except one.
  let oddCount = 0;
  let evenCount = 0;

  for (let char in counts) {
    if (counts[char] % 2 === 1) {
      oddCount++;
    } else {
      evenCount++;
    }
  }

  return oddCount === 1;

}

module.exports = permPalin; ``