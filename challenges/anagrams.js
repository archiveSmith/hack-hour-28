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
  let letters = string.split(""),
    results = [[letters.shift()]];
  while (letters.length) {
    const currLetter = letters.shift();
    let tmpResults = [];
    results.forEach(result => {
      let rIdx = 0;
      while (rIdx <= result.length) {
        const tmp = [...result];
        tmp.splice(rIdx, 0, currLetter);
        tmpResults.push(tmp);
        rIdx++;
      }
    });
    results = tmpResults;
  }
  return results
    .map(letterArray => letterArray.join(""))
    .filter((el, idx, self) => self.indexOf(el) === idx)
    .sort();
}

console.log(anagrams("abc"));

module.exports = anagrams;
