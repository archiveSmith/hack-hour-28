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
    let allParen = [];
    let allParenRever = [];

    let firstParen = input.indexOf('(');
    while(firstParen > 0){
        allParen.push(firstParen);
        firstParen = input.indexOf('(',firstParen)
    }

    let secondParen = input.indexOf(')');
    while(secondParen > 0){
        allParenRever.push(secondParen);
        secondParen = input.indexOf(')',secondParen)
    }

    if(allParen.length !== allParenRever.length || allParenRever[0] < allParen[allParen.length - 1]) {
        return false
    } else {
        return true
    }
    // let firstBracket = input.indexOf('[');
    // let secondBracket = input.indexOf(']', firstBracket);
    
    // let firstCurlly = input.indexOf('{');
    // let secondCurlly = input.indexOf('}', firstBracket);


    
    // if (firstParen < secondParen) {
    //     firstParen = input.indexOf('(', secondParen);
    //     while(firstParen > 0) {
    //         secondParen = input.indexOf(')', firstParen)
    //         if()
    //     }
        
    // }
    // return true
    // else return false;


}

module.exports = balancedParens;
