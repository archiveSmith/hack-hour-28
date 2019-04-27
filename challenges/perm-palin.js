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
  //clean strings
  let cleanstrings = str.replace(/[^0-9a-z]/gi, '');
  let word = cleanstrings.toLowerCase();
  let output;

  //two pointers

  let i = 0;
  let j = word.length-1;

  while(i < j){
    if(word[i] === word[j]){
      output = true;
    } else if(word[i] !== word[j]){
      output = false;
    }
    i++;
    j--;
  }
	return output;
}

module.exports = permPalin;