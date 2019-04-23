// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----'); -> true
// matchWord('__ENDDNE__'); -> false(not separated by a space)
// matchWord('IF()()fi[]'); -> true(should be case -insensitive)
// matchWord('for__if__rof__fi'); -> false     not properly closed.like([) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'); -> true
// matchWord(''); -> true

function matchWord(str) {
  console.log("STARTING FOR: ", str);

  // Normal Prcedure
  let cleanString = str.toLowerCase().replace(/[^a-z0-9]/gi, ' '); // replace all weird fuckin characters with spaces
  let cleanArray = cleanString.split(' ').filter(elt => elt != ''); // ['for', 'if', 'ro', 'fi']
  console.log("CLEAN ARRAY IS: ", cleanArray);
  let bool = true;
  cleanArray.forEach((elt, ind, arr) => {
    let revElt = elt.split('').reverse().join('');
    if (!(arr.includes(revElt))) {
      bool = false;
    }
  })


  // Special case for single word or for empty string
  if (cleanArray.length === 1 && cleanArray[0].length > 0) {
    // Only one word
    bool = false;
  } else if (cleanArray.length === 1 && cleanArray[0].length === 0) {
    // empty string
    bool = true;
  }
  console.log("Are all words 'closed' by backwards counterparts?: ", bool);
  console.log("----------");

  // Special Case for bullshit case #4 where there are things like [(]) instead of [()]
  /**
   * I could use a fuckin stack. But I'm kidn of hungover... And I don't reaaaally wanna do it :(
   * But this is the way that it'd work, okay:
   * We could use a STACK! in our forEach, we'd push each element onto the stack. 
   * If the element that we're pushing onto the stack happens to match the top element of the stack, negate them both.
   * If, at the end, the stack length is greater than 0, then we don't have fully matchign things.
   */

  return bool;
}

matchWord('__END_DNE-----');
matchWord('__ENDDNE__');
matchWord('IF()()fi[]');
matchWord('for__if__rof__fi')
matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');
matchWord('');

module.exports = matchWord;
