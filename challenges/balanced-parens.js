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
    const newInput = input.split('');
    console.log(newInput);
    // let openingP = '(';
    // let closingP = ')';
    const brackets = {
        oP : '(',
        cP : ')',
        op : '[',
        cp : ']',
        op : '{',
        cp : '}'
    }
    let oCount = 0;
    let cCount = 0;
    newInput.forEach(el => {
        for(let key in brackets) {
            if(el === brackets.oP) oCount++;

            if(el == brackets.cP && cCount < oCount) cCount++
            console.log(oCount, cCount)
        }
    })
    // newInput.forEach((el,i) => {
    //     if()
    // })
    if(oCount === cCount) return true;

    return false;
}
// if the first opening bracket is even number away from their closing bracket then it should return false. 
// finish up the last part.


// console.log(balancedParens('('));  // false 
// console.log(balancedParens('()')); // true
// console.log(balancedParens(')('));  // false
// console.log(balancedParens('(())')); // true

// console.log(balancedParens('[](){}')); // true
// console.log(balancedParens('[({})]'));   // true
// console.log(balancedParens('[(]{)}')); // false <-- failed this test.

module.exports = balancedParens;
