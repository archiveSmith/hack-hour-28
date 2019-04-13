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
console.log(stringTrimmer('(())'))


 function stringTrimmer(input) {
    let trimmedString = [];
    const bracks = ["{", "}", "(", ")", "[", "]"];
    //remove non-bracket characters
    for (let i=0; i<input.length; i++) {
        for (let j=0; j<input.length; j++) {
            if (input[i] === bracks[j]) {
                trimmedString.push(input[i])
            }
        }; 
    }
    return trimmedString;
 }
function balancedParens(input){
//what constitutes a balancing?


// creating pairs
let pairs = [["(",")"],["{","}"],["[","]"]]


    const trim = function stringTrimmer(input);
    if (trimmed.length % 2 !== 0) {
        return false
    }
    for (let i = 0; i < trim.length; i++) {
        if (trimmed[i] === "[" && trimmed[i+1] === "]") {

        }
    }

}

module.exports = balancedParens;
