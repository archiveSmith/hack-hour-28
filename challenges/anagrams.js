/**
 Given a single input string, write a function that produces all possible anagrams
 of a string and outputs them as an array. At first, don't worry about
 repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(string) {
  const anagrams = new Set();
  string = string.split('');
  const doIt = (string, anagram) => {
    if (!string.length) {
      anagrams.add(anagram.join(''));
    }
    for (let i = 0; i < string.length; i++) {
      let copy = string.slice();
      copy.splice(i, 1);
      doIt(copy, anagram.concat(string[i]));
    }
  }
  doIt(string, []);
  return Array.from(anagrams);
}

const testStr = anagrams('abc');
console.log(testStr); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]


module.exports = anagrams;
