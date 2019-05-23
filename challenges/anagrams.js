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

  let grams = [string];
  for(let i = 0; i < string.length; i++) {
    grams = grams.reduce((acc, ele) => {
      for(let j = i; j < ele.length; j++) {
        let strArr = ele.split('');
        [strArr[i], strArr[j]] = [strArr[j], strArr[i]];
        strArr = strArr.join('');
        acc.push(strArr); //ele with ith and jth entries swapped
      }
      return acc;
    }, [])
  }

  return grams;

}

//console.log(anagrams('abc'));

module.exports = anagrams;
