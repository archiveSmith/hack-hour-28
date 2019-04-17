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
  //remove punctuation to whitespace, set lowercase, split on whitespace, join to single spaced string
  let cleanStr = str.replace(/[^\w\s]/gi, ' ').replace(/_/g, ' ').trim().toLowerCase().split(/\s+/);

  if(cleanStr.length === 1) return true;

  const wordStack = [];

  for(let i = 0; i < cleanStr.length; i++) {
    const reversedWordi = cleanStr[i].split('').reverse().join('');
    //if reverse does not exist in stack, push word to stack
    if(!wordStack.includes(reversedWordi)) {
      wordStack.push(cleanStr[i]);
    } //otherwise it should be found at the top of the stack
    else {
      if(wordStack.pop() != reversedWordi) return false;
    }
    console.log(i, wordStack)
  }

  return wordStack.length === 0;
}
/*
console.log(matchWord('__END_DNE-----'));
console.log(matchWord('__ENDDNE__'));
console.log(matchWord('IF()()fi[]'));
console.log(matchWord('for__if__rof__fi'));
*/
//console.log(matchWord('%%$@$while aba try ! yrt  for if_fi rof#*#  aba elihw'));

//console.log(matchWord('labal aba labal aba labal'))

//console.log(matchWord(''));


module.exports = matchWord;
