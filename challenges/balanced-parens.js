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
  if (input.length <= 1 || input[0] === ")") return false;

  const regex = /[\(|\)]+/;

  let removed = input
    .split("")
    .filter(char => regex.test(char))
    .join("");

  const firstHalf = removed.slice(0, removed.length / 2);

  if (firstHalf.indexOf(")") !== -1) return false;

  const secondHalf = removed.slice(removed.length / 2);

  let flippedSecondHalf = secondHalf
    .split("")
    .map(el => {
      if (el === ")") {
        return "(";
      } else if (el === "(") {
        return ")";
      }
    })
    .join("");

  return firstHalf === flippedSecondHalf;
}

console.log(balancedParens("()()"));

module.exports = balancedParens;
