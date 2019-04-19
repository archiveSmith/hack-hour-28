// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('');  -> true

function matchWord(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() != str[i].toUpperCase()) {
      newStr += str[i].toLowerCase()
    } else {
      newStr += ' ';
    }
  }
  newStr = newStr.split(' ').filter(el => el != '');
  let stack = [];
  for (let i = 0; i < newStr.length; i++) {
    if (stack.length === 0) {
      stack.push(newStr[i]);
    }
    else {
      if (stack[stack.length - 1] === newStr[i].split('').reverse().join('')) stack.pop();
      else stack.push(newStr[i]);
    }
  }
  return stack.length === 0;
}

console.log(matchWord('__ENDDNE__'));  // false       (not separated by a space)
console.log(matchWord('IF()()fi[]'));  // true        (should be case-insensitive)
console.log(matchWord('for__if__rof__fi'));  // false     not properly closed. like ( [) ] 
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw')); // -> true
module.exports = matchWord;
