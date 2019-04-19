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
/**
 *
 * @param {*} str
 * output: boolean
 * GS: Get rid of all symbols except space and make stings to lower/uppercase and iterate through the input string
 *     reverse first characters until the first space
 *     if the reversed characters are match with last characters after last space return true
 *
 */

function matchWord(str) {
  const keywords = str.match(/[a-zA-Z]+/g) || [];
  const wordStack = [];

  console.log({ str, keywords });

  keywords.forEach(word => {
    const index = wordStack.length - 1;
    const stackTop = (wordStack[index] || "").toLowerCase();
    const reversed = word
      .split("")
      .reverse()
      .join("")
      .toLowerCase();

    if (reversed === stackTop) {
      wordStack.pop();
    } else {
      wordStack.push(word);
    }
  });

  return !wordStack.length;
}

module.exports = matchWord;

console.log(matchWord("__END_DNE-----")); // -> true
console.log(matchWord("__ENDDNE__")); // -> false       (not separated by a space)
console.log(matchWord("IF()()fi[]")); // -> true        (should be case-insensitive)
console.log(matchWord("for__if__rof__fi")); // -> false     not properly closed. like ( [) ]
console.log(matchWord("%%$@$while  try ! yrt  for if_fi rof #*#  elihw")); // -> true
console.log(matchWord("")); //
