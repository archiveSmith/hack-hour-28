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

 // For this to be true, parse string. Count every occurance of a character. ONLY ONE 
 // character can show up once. Otherwise, all character occurances must be divisible 
 // by 2. 

function permPalin(str) {
  // Parse string and add to object via key-value pairs

  let charObj = {};

  // loop through string and count occurances of each char.

  for (let i = 0; i < str.length; i++) {
    if (charObj[str[i]] === undefined) {charObj[str[i]] = 1} else {
    charObj[str[i]] = ++charObj[str[i]];}
  }

  // Get values from object, loop through that array and see the total remainders by 
  // dividing by two.

  let occurances = Object.values(charObj);
  let remainders = 0;

  for (let j = 0; j < occurances.length; j++) {
    remainders += occurances[j] % 2;
  }
  
  if (remainders > 1) 
    {return false
      } else {
     return true
  }
}

module.exports = permPalin;