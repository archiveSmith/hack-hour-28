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

const balancedParens = (input) => {
    let checkOpen = new Set ("(, {, [")
    let checkClose = new Set("), }, ]")
    let openStr = "";
    let closeStr = "";
    let checkStr = "";
    
  
    for(let i = 0; i < input.length; i++){
      if(checkOpen.has(input[i])){
        openStr += input[i];
      }
      if(checkClose.has(input[i])){
        closeStr += input[i];
      }
      checkStr += input[i];
    }
    
  if(checkStr[0] === ")" || checkStr[0] === "}" || checkStr[0] === "]"  ){
    return false;
  } else if(openStr.length === closeStr.length) {
      return true;
    } 
    return false;
  }

module.exports = balancedParens;
