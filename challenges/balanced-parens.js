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
 * 
 * @param {string} input - A string to be checked if parens-balanced + brackets-balanced
 * @returns {boolean}  - Whether parens-balanced
 */
function balancedParens(input) {
  let inputArr = input.split('');

  let leftParens = [];
  let leftBrackets = [];
  let leftCurlyBrackets = [];


  for (let char of inputArr) {
    console.log("CHAR IS: ", char);
    // for parens ()
    if (char === '(') {
      leftParens.push(char);
      console.log("Pushed ", char, " to the leftParens array");
      console.log("leftParens array is now: ", leftParens);
    } else if (char === ')') {
      if (leftParens.length === 0 || leftBrackets.length !== 0 || leftCurlyBrackets.length !== 0) {
        console.log("EARLY RETURN:")
        return false
      } else {
        leftParens.pop();
        console.log("Removed a left parens from the leftParens array");
      }
    }
    // For brackets: []
    if (char === '[') {
      leftBrackets.push(char);
      console.log("Pushed ", char, " to the leftBrackets array");
      console.log("leftBrackets array is now: ", leftBrackets);
    } else if (char === ']') {
      if (leftBrackets.length === 0 || leftParens.length !== 0 || leftCurlyBrackets.length !== 0) {
        console.log("EARLY RETURN:")
        return false
      } else {
        leftBrackets.pop();
        console.log("Removed a left curly bracket from the leftBrackets array");

      }
    }
    // for curlyBrackets
    if (char === '{') {
      leftCurlyBrackets.push(char);
      console.log("Pushed ", char, " to the leftCurlyBrackets array");
      console.log("leftCurlyBrackets is now: ", leftCurlyBrackets);
    } else if (char === '}') {
      if (leftCurlyBrackets.length === 0 || leftParens.length !== 0 || leftBrackets.length !== 0) {
        console.log("EARLY RETURN:")
        return false
      } else {
        leftCurlyBrackets.pop();
        console.log("Removed a left curly bracket from the leftCurlyBrackets array");

      }
    }
  }

  console.log("Got to end. objs are: ", leftParens, leftBrackets, leftCurlyBrackets);

  return leftParens.length === 0 && leftBrackets.length === 0 && leftCurlyBrackets.length === 0;

}




// console.log(balancedParens('('))
// console.log(balancedParens('()'))
// console.log(balancedParens(')('))
// console.log(balancedParens('(())'))

console.log(balancedParens('[](){}')) //t
console.log(balancedParens('[({})]')) //t
console.log(balancedParens('[(]{)}')) //f




module.exports = balancedParens;
