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
    const parenArray = [];
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        let outChar;
        if(char === '{' || char === '[' || char === '('){
            parenArray.push(char);
        }else if(char === '}'){
            outChar = parenArray.pop();
            if(outChar != '{') return false;
        } else if(char === ']'){
            outChar = parenArray.pop();
            if(outChar != '[') return false;
            
        } else if(char === ')'){
            outChar = parenArray.pop();
            if(outChar != '(') return false;

        } else {
            //non paren character - ignore
        }
        
    }

    // array is empty, parens were balenced
    if(parenArray.length === 0 ) return true;


    //array not empty - parens were missed
    return false;
}

module.exports = balancedParens;
