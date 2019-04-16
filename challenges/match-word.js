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
    function reverse(string){
        return string.split("").reverse().join("");
    }

    let exStr = str.toLowerCase();
    const output = [];
    if(str === '') return true;
  
    var regexStr = exStr.replace(/[^\w\s]/gi, '');
    let splitStr = regexStr.split('_');
    console.log(splitStr);
    
    
    for(let i = 0; i < splitStr.length; i++){
        if(splitStr[i] !== (/[^\w\s]/gi, '')){
            output.push(splitStr[i]);
        }
    }

    

        if(output[0] === reverse(output[1])){
            return true;
        }
        else{
            return false;
        }
    }

   
}


console.log(matchWord('IF()()fi[]'));
console.log(matchWord('__ENDDNE__'));
console.log(matchWord('__END_DNE-----')); // -> true
console.log(matchWord('for__if__rof__fi')); 
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
console.log(matchWord(''));

module.exports = matchWord;
