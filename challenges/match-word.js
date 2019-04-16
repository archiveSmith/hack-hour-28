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

  if (str.length === 0) {
    return true
  };

  let stringArr = str.match(/[a-zA-Z]+/g);
  let stack = [];

  console.log(stringArr);
  
  for (let i = 0; i < stringArr.length; i++) {
    let currentStr = stringArr[i].toLowerCase().split('').reverse().join('');
    console.log(currentStr);

    if(currentStr = stack[stack.length - 1]) {
      stack.pop()
   
    } else {
      stack.push(stringArr[i].toLowerCase());
      
    }
    
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(matchWord('__END_DNE-----'))
console.log(matchWord('__ENDDNE__'));
console.log(matchWord('IF()()fi[]'));
console.log(matchWord('for__if__rof__fi'))
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'))
console.log(matchWord(''));


module.exports = matchWord;
