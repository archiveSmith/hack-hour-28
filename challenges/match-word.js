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
  // Should create an empty array to serve as a "callstack" for alphabet characters
  let arr = [];
  let counter = 0;

  for ( let i = 0; i < str.length; i++ ) {
    if (str[i].match(/[a-zA-Z]/g)) {
      arr.push(str[i])
    } else {
      let newArr = arr;
      
      for ( let j = newArr.length ; j > 0; j++){
        if (str[i] === newArr[j]) {
          newArr.pop()
        }
      }
    }
  }
  console.log('test string abcdefg')
  console.log(arr)
}

matchWord('sdf323j2jk2l')

module.exports = matchWord;
