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

function balancedParens(input){
  let result = true;
  let strArr = input.split(" ")
  for (let i = 0; i < strArr.length; i += 1) {
    if (strArr[i].includes('[', ']', '{', '}', '(', ')')) {
      if (strArr[i] === '[' && strArr[i].includes(']') === false) result = false;
      if (strArr[i] === ']' && strArr[i].includes('[') === false) result = false;
      if (strArr[i] === '{' && strArr[i].includes('}') === false) result = false;
      if (strArr[i] === '}' && strArr[i].includes('{') === false) result = false;
      if (strArr[i] === '(' && strArr[i].includes(')') === false) result = false;
      if (strArr[i] === ')' && strArr[i].includes('(') === false) result = false;
    }
  }
  return result;
}

module.exports = balancedParens;
