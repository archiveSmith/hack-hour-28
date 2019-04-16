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
  let isClosed = true;
  const revStr = reverser(str);//?
  let auxArr = str.match(/\b\S+\b/g);//?
  if (str.length === 0) {
    return isClosed;
  }

  auxArr.forEach((word, i, arr) => {
    if (!arr.includes(reverser(word))) {
      isClosed = false;
    }
  })
  return isClosed;

}

function reverser(str) {
  return str.split('').reverse('').join('');
}

matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  //?-> true
module.exports = matchWord;
