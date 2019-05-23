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

const anagrams = (string) => {
  let outputArr = [];

  //two pointers, begin and end
  let i = string.length-2
  let k = string.length-1;

  while(k > 0 && i === 0){
    [string[k], string[i]] = [string[i], string[k]]
    i--
    k--;
  }

}

module.exports = anagrams;
