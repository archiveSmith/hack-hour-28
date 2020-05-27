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
  let parens = {
    '{': '}',
    '(': ')',
    '[': ']'
  }
  let stack = [];

  for (let i = 0, char, last; i < input.length; i++) {
    char = input[i]
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char)
    } else if (char === ')' || char === '}' || char === ']') {
        last = stack.pop();
        if (parens[last] !== char) return false;
        
      }
  }    
    return stack.length === 0;    
}
     
//   return true;
// }
// function balancedParens(input){
//   let count = {
//     '{' : 1,
//     '}' : 1,
//     '(' : 1,
//     ')' : 1,
//     '[' : 1,
//     ']' : 1
//   }

//   for (let i = 0, char; i < input.length; i++) {
//     char = input[i]
//     if (count[char]) count[char]++
//   }

//   if (count['{'] !== count['}'] ||
//     count['('] !== count[')'] ||
//     count['['] !== count[']']
//   ) {
//     return false;
//   } else {
//     return true;
//   }
// }

module.exports = balancedParens;

// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'));
// console.log(balancedParens(' var hubble = function() { telescopes.awesome();'))
// console.log(balancedParens('[(]{)}'));