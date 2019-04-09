/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

/**
 * Woops, lmao. Misinterpreted the question. Rewriting below.
 */
// function balancedParens(input) {
//   let inputArr = input.split('');

//   let countObj = {
//     "(": 0,
//     ")": 0
//   }

//   let searchingFor = Object.keys(countObj);

//   // Get counts
//   for (let char of inputArr) {
//     if (searchingFor.includes(char)) {
//       countObj[char]++;
//     }
//   }
//   // return
//   return countObj['('] === countObj[')'];
// }





/**
 * 
 * @param {string} input - A string to be checked if parens-balanced
 * @returns {boolean}  - Whether parens-balanced
 */
function balancedParens(input) {
  let inputArr = input.split('');

  let leftParens = [];


  for (let char of inputArr) {
    if (char === '(') {
      leftParens.push(char);
    } else if (char === ')') {
      if (leftParens.length === 0) {
        return false
      } else {
        leftParens.pop();
      }
    }
  }

  return leftParens.length === 0;

}




console.log(balancedParens('('))
console.log(balancedParens('()'))
console.log(balancedParens(')('))
console.log(balancedParens('(())'))




module.exports = balancedParens;
