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
    const split = word
    .replace(/\s/g,'')
    .toLowerCase()
    .split('');
  
  if (split.length === 1) return true;

  const repeat = split.reduce((agg, letter) => ({
    ...agg,
    [letter]: agg[letter] ? agg[letter] + 1 : 1,
  }), {});

  return Object.values(repeat)
    .filter(val => val % 2).length <= 1;
	
}

module.exports = permPalin;