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
const open = new Set(['{', '[', '('])
const close = new Set(['}', ']', ')'])
const pairs = { '{':'}', '[':']', '(': ')' }

function balancedParens(input, stack = []){
    // () , [].  {}
    const next = input[0];

    if(input === '') {
      return !stack.length
    } else if(close.has(next) && pairs[stack.pop()] !== next) {
      return false;
    } else if(open.has(next)) {
      stack.push(next)
    } else {
    }
    return balancedParens(input.slice(1), stack)
}

   
    

console.log(balancedParens('[({})]'));
console.log(balancedParens('(())'));
console.log(balancedParens('[](){}')); 
console.log(balancedParens('[({})]'));   
balancedParens('[(]{)}');
module.exports = balancedParens;
