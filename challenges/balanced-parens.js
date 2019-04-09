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

 /**
  * 
  * input: string
  * output: boolean
  * GS: If there are same number of parenthese, return true 
  * // iterate the string
  *     // if the element is an opening bracket, push into the stack
  *     // if the element is an closing bracket, check it's a pair with the last item in stack
  *         // if it does, pop off the last item in stack and move onto the next item
  *     // if it reaches the end of the stack, return true
  */
// function balancedParens(input){
//     if (typeof input !== 'string') return false;
//     let leftSide = 0;
//     let rightSide = 0;
//     let inputArr = input.split('');
//     //console.log(inputArr[0])
//     if(inputArr[0] === '(') {
//         inputArr.forEach(char => {
//             if(char === '(') leftSide++;
//             if(char === ')') rightSide++;
//         })
//         if(leftSide === rightSide) return true;
//         return false;
//     }
//     return false;
// }

function balancedParens(input) {
    let stack = [];
    let parenthese = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < input.length; i += 1) {
        if(input[i] === '(' || input[i] === '[' || input[i] === '{') {
            stack.push(input[i]);
        }
        else {
            let last = stack.pop();

            if ((input[i] !== parenthese[last])) { return false };
        } 
    }
    if(stack.length !== 0) { return false };
    
    return true;
}
// console.log(balancedParens('('));  // false
// console.log(balancedParens('()')); // true
// console.log(balancedParens(')(')); // false
// console.log(balancedParens('(())')); // true

// console.log(balancedParens('[](){}')); // true
// console.log(balancedParens('[({})]'));   // true
// console.log(balancedParens('[(]{)}')); // false

// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
// console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false

module.exports = balancedParens;
