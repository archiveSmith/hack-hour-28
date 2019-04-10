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

    // if lenght of string is less than 2 then return false
    
    if (input.length <= 1) return false;
    
    //array of opening brackets 
    let opening = ['(','{','[']
    //array of closing brackets
    let closing = [')','}',']']
    
    let checker;
    
    for (let i = 0 ; i < input.length/2 ; i++){
      checker = input[i]
      // console.log(checker)
      // console.log(opening.includes(checker))
      // let last = input.pop()
      if (opening.includes(checker) === true && opening.indexOf(checker) === closing.indexOf(input.slice(input.length-(1+i)))){
          // console.log('working1')
          return true;
      }
    
      if ((opening.includes(checker) === true) && opening.indexOf(checker) === closing.indexOf(input[i+1])){
        // console.log('working2')
        return true;
      }
    }
    return false;
    }
    
    console.log(balancedParens('()')) // true
    console.log(balancedParens('(){}[]')) // true
    console.log(balancedParens('(){}[(]')) // false
    console.log(balancedParens('('))  // false
    console.log(balancedParens('()')) // true
    console.log(balancedParens(')(')) // false
    console.log(balancedParens('(())')) // true
    console.log(balancedParens('[{}([]){]')) //true

module.exports = balancedParens;
