// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {

    //replace all punc with white space
    var words = str.replace(/[.,\/#!$@%\^&\*;[\]:{}=\-_`~()]/g, " ");
    let wordStack = [];
    let topStackPointer = -1;

    words = words.toLowerCase(); //make all lowercase
    
    while (words.length > 0) {
        console.log(`Words without punc: '${words}'`);
        regex = /\s*(\S+)\s*(.*)/
        let outArray = regex.exec(words)
        
        console.log('outArray: ', outArray);
        let word = outArray[1]; //current word we're looking at
        if(outArray[2] != null) words = outArray[2];    //remainder of word

        //if the word matches what's on top of the stack then pop it off else push current word to top.
        //using shift/unshift would have been better
        checkStack = wordStack[topStackPointer];
        if (word === wordStack[topStackPointer]) {
            wordStack.pop();
            topStackPointer--;
        } else {
            
            console.log(`word:${word} Stacktop:${wordStack[topStackPointer]}`);
            wordStack.push(word.split('').reverse().join('')) //reverse the current word and push on to the stack
            topStackPointer++;
        }
    }


    if (wordStack.length === 0) return true;
    return false;

 

}
//Quokka Debugging
// let out;
// out = matchWord('__END_DNE-----');
// out 
// out = matchWord('__ENDDNE__');        
// out
// out = matchWord('IF()[]()fi[]'); 
// out
// out = matchWord('for__if__rof__fi');  
// out
// out = matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'); 
// out
// out = matchWord('');  
// out


module.exports = matchWord;
