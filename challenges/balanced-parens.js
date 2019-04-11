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
    let str = input.toString();
    let strArr = [];
    for (let i = 0; i <str.length; i += 1) {
        strArr.push(str[i]);
    }

    let cacheObj = {'(':')', '{':'}', '[':']'};
    let cacheArr = [];

    strArr.forEach(el => {
        if (Object.keys(cacheObj).includes(el) || Object.values(cacheObj).includes(el)) {
            cacheArr.push(el);
        }
    })

    for (let i = 0; i < cacheArr.length - 1; i += 1) {
        let par = cacheArr[i];
        let j = i + 1;
        while (cacheArr[j]) {
            if (cacheArr[j] === 
        }
    }
}

console.log(balancedParens('(tt(test)t)')); // true
//console.log(balancedParens(')(')) // false
//console.log(balancedParens('[](){}')) // true

module.exports = balancedParens;
