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

function balancedParens(input) {
  let firstParen = input.indexOf("(");
  let lastParen = input.lastIndexOf(")");
  let parenSubStr = input.slice(firstParen, lastParen + 1);
  let i = 0;
  while (parenSubStr) {
    if (parenSubStr.indexOf("(") > input.lastIndexOf(")")) {
      return false;
    } else {
      parenSubStr.indexOf("("); //?
      parenSubStr.indexOf(")"); //?
      parenSubStr;
      parenSubStr = parenSubStr.slice(
        parenSubStr.indexOf("(") + 1,
        parenSubStr.lastIndexOf(")")
      );
      // i += 1;
    }
  }
  return true;
}

balancedParens("[(]{)}"); //? false
balancedParens("(())"); //? tru

module.exports = balancedParens;
