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
  let leftPar = 0;
  let rightPar = 0;
  let leftBrack = 0;
  let rightBrack = 0;
  let leftCurl = 0;
  let rightCurl = 0;

  let splitString = input.split("")
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] === "(") {leftPar += 1} else
    if (splitString[i] === ")") {rightPar += 1} else
    if (splitString[i] === "[") {leftBrack += 1} else
    if (splitString[i] === "]") {rightBrack += 1} else
    if (splitString[i] === "{") {leftCurl += 1} else
    if (splitString[i] === "}") {rightCurl += 1}
    }

  if (leftPar === rightPar && leftBrack === rightBrack && leftCurl === rightCurl) {
    return true
  } else {
    return false
  }
}

module.exports = balancedParens;
