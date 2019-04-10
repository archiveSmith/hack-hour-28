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
   let mapper = new Map();
   let stack = [];

   mapper.set('(',')');
   mapper.set('{','}');
   mapper.set('[',']');

   if(input.length % 2 !== 0)
   {
     return false;
   }

   let ch = input.split('');

   for(let i = 0; i < ch.length; i++)
   {
     if(mapper.has(ch[i]))
     {
       stack.push(mapper.get(ch[i]));
     }     
     else if(stack.length === 0 || ch[i] !== stack.pop()){
         
       return false;
     }
     
     return true;
   }
}

console.log(balancedParens('[](){}'));
module.exports = balancedParens;
