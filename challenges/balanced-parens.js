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
  const parensLeft = {
    '{': '}',
    '(': ')',
    '[': ']',
  }
  const parensRight = {
    '}': '{',
    ')': '(',
    ']': '[',
  }
  newStr = '';
  for(let i = 0; i < input.length; i += 1){
    if(parensLeft[input[i]] || parensRight[input[i]]) newStr += input[i];
  }
  if(newStr.length % 2 != 0)return false;
  let balancedByOpposite = true;
  for(let i = 0; i < (newStr.length / 2); i += 1){
    const currentChar = newStr[i];
    const oppositeChar = newStr[newStr.length - 1 - i]
    if(balancedByOpposite){
      if(oppositeChar != parensLeft[currentChar]) balancedByOpposite = false;
    }
  }
  let balancedByCompliment = true;
  for(let i = 0; i < newStr.length; i += 2){
    if(balancedByCompliment){
      if(parensLeft[newStr[i]] != newStr[i + 1]) balancedByCompliment = false;
    }
  }
  return(balancedByOpposite || balancedByCompliment);
}

module.exports = balancedParens;
