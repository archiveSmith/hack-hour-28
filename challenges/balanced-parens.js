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
  let bracks = [];
  let pairs = {']':'[', ')':'(', '}':'{'}

  for(let i = 0; i < input.length; i++) {
    // push in all [ ( { characters
      if(input[i].match(/[\(\[\{]/g))
        bracks.push(input[i])
    //pop last if it is the match to ] ) }
      else if(input[i].match(/[\]\)\}]/g)) {
        if(pairs[input[i]] === bracks[bracks.length - 1]) {
          bracks.pop();
        }
        else return false;
      }
  }
  //if length of bracks is 0, we had all pairs removed OR we didn't remove all pairs so something didn't balance
  return !bracks.length 
}

//console.log(balancedParens("{(turtles)[are]{so(cool}}"));

module.exports = balancedParens;
