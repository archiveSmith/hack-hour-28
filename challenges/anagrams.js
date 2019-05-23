/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(string) {
  let combinations = [];

  //if there's only one letter in the string, return it out in the array.
  if (string.length === 0 || string.length === 1) {
    combinations.push(string);
    return combinations;
  }
  
  for (var i = 0; i < string.length; i++) {
    let firstChar = string[i];
    console.log(firstChar)
    let charsLeft = string.substring(0, i) + string.substring(i + 1);
    console.log(charsLeft)
    let innerPermutations = anagrams(charsLeft);
    console.log(innerPermutations)
    for (let j = 0; j < innerPermutations.length; j++) {
      combinations.push(firstChar + innerPermutations[j]);
    }
  }
  return combinations;
}

console.log(anagrams('abc'))

module.exports = anagrams;
