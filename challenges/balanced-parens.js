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

 //STEP 1
function balancedParens(input){
    let parensCount = {};
    for (let i=0; i < input.length; i ++) {
    if (input[i] === '(' && !parensCount.left) {
      parensCount.left = 1
      } else if (input[i] === ')' && !parensCount.right && parensCount.left) {
      parensCount.right = 1;
    } else if (input[i] === '(') {
      parensCount.left++;
    } else if (input[i] === ')') {
      parensCount.right++;
    }
    }
    if (parensCount.left === parensCount.right) return true;
    else return false;
}

//STEP 2 - incomplete
// function balancedParens(input){
//     const leftBrackets = '[({'
//     const rightBrackets = '})]'
//     let parensCount = {};
//     for (let i=0; i < input.length; i ++) {
//     if ((input[i] === '[' || input[i] === '(' || input[i] === '{') && !parensCount.left) {
//       parensCount.left = 1
//       } else if ((input[i] === ']' || input[i] === ')' || input[i] === '}') && parensCount.left) {
//       parensCount.right = 1;
//     } else if (input[i] === '[' || input[i] === '(' || input[i] === '{') {
//       parensCount.left++;
//     } else if (input[i] === ']' || input[i] === ')' || input[i] === '}') {
//       parensCount.right++;
//     }
//     }
//     // console.log(parensCount);
//     if (parensCount.left === parensCount.right) return true;
//     else return false;
//   }


module.exports = balancedParens;
