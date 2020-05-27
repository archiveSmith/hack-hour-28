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
  let strCopy = str + ' ';
  let stack = [], temp = '';

  for(let i = 0; i < strCopy.length; i++) {
    if (strCopy[i].toLowerCase() !== strCopy[i].toUpperCase()) {
      temp += strCopy[i];
    } else {
      if (temp.length) {
        if (stack[stack.length - 1] === temp.split('').reverse().join('')) {
          stack.pop();
          temp = '';
          
        } else {
          stack.push(temp.toLowerCase());
          temp = '';
        }
      }
    }
  }
  return stack.length === 0
}

module.exports = matchWord;

// console.log( matchWord('__END_DNE-----'));
// console.log(matchWord('__ENDDNE__'));
// console.log(matchWord('IF()()fi[]'));
// console.log(matchWord('for__if__rof__fi'));
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
// console.log(matchWord(''));