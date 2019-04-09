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
    // for(let i=0; i<input.length; i++) {
    //     if (input[i] === '(' || input[i] === '[' || input[i] === '{') {
    //         leftBracket++;
    //     } else if (input[i] === ')' || input[i] === ']' || input[i] === '}') {
    //         rightBracket++;
    //     }
    // }
    // if (leftBracket === rightBracket) {
    //     return true;
    // } else {
    //     return false;
    // }
    let filtered = input.replace(/[a-z=:;.]/ig, '')
    // get rid of white spaces
    filtered = filtered.split(' ').join('');
    if (filtered.length%2 === 1) {
      return false;
    }

    let checkArr = [];
    for (let i=0; i<filtered.length; i++) {
      if (filtered[i] === '(' || filtered[i] === '{' || filtered[i] === '[') {
        checkArr.push(filtered[i]);
      } if (filtered[i] === ')' || filtered[i] === '}' || filtered[i] === ']') {
        let popped = checkArr.pop();
        if (filtered[i] === ')' && popped !== '(') {
          return false;
        } else if (filtered[i] === ']' && popped !== '[') {
          return false;
        } else if (filtered[i] === '}' && popped !== '{') {
          return false;
        }
      }
    }
    return true;
}

module.exports = balancedParens;
