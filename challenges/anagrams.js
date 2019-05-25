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

const foundGrams = new Set();


function arrayGrams(strArr) {
  if (strArr.length == 1) return [strArr];
  // console.log(strArr);
  const retArray = [];
  strArr.forEach((item, index) => {
    const subArray = strArr.slice();
    const currChar = item;
    currChar
    // console.log('subArray: ', subArray);
    subArray.splice(index, 1);
    // console.log('subArray: ', subArray); 

    const subGrams = arrayGrams(subArray);
    subGrams.forEach(subGram => {
      for (let i = 0; i < subGram.length; i++) {
        const fullGram = subGram.slice();
        fullGram.splice(i, 0, currChar);
        retArray.push(fullGram);
      }
    })


  })
  return retArray;
}


// strArr.forEach((char,index) => {
//   const subArray = strArr.splice();
//   subArray
//   subArray.splice(index,1);
//   subArray
//   const subGram = arrayGrams(subArray);
//   subGram.forEach(char,index =>{

//   })
// });

function anagrams(string) {
  if (string.length === 1) return [string];
  const strArr = string.split('');
  strArr
  const retArray = arrayGrams(strArr);

  const set = new Set();

  for (let i = 0; i < retArray.length; i++) {
    const element = retArray[i];
    set.add(element.join(''));
  }

  console.log("Total Calculated:", retArray.length);

  return set;
}
let input = '12345678'
console.time("anagram");
let out = anagrams(input);
console.timeEnd("anagram");

console.log(`There are: ${out.size} unique anagrams for ${input} `);


// let array = [0,1,2,3,4];

// let sub = array.slice(0)
// let spliced = sub.splice(2,1)
// spliced
// sub


module.exports = anagrams;
