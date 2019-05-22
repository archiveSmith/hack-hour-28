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


//time complexity 
function anagrams(string) {
  const result = new Set([string]);
  strArr = string.split('');
  //repeat action for each character in the string
  for(let count = 0; count < string.length; count += 1){
    for(let i = 0; i < string.length - 1; i += 1){
      let temp = strArr[i + 1];
      strArr[i + 1] = strArr[i];
      strArr[i] = temp;
      result.add(strArr.join(''));
    }
  }
  return Array.from(result);
}
const result = anagrams('abc');
console.log(result);

module.exports = anagrams;
