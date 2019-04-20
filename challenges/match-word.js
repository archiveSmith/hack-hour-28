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
    if(str.length === 0) return true;
    str = str.replace(/[^A-Za-z]/g, " ");
    const split = str.split(' ');
    // iterate through and check if 
    console.log(split);
    const string = 'end';
    const reverse = 'dne'.split('').reverse().join('')
    console.log('dne'.split('').reverse().join('') === string)
    for(let i = 0; i < split.length; i += 1) {
        
    }
}

// console.log(matchWord('__END_DNE-----'));

// using regex
function matchWord(str) {
    const keywords = str.match(/[a-zA-Z]+/g) || [];
    const wordStack = [];
  
    console.log({ str, keywords });
  
    keywords.forEach((word) => {
      const index = wordStack.length - 1;
      const stackTop = (wordStack[index] || '').toLowerCase();
      const reversed = word.split('').reverse().join('').toLowerCase();
  
      if (reversed === stackTop) {
        wordStack.pop();
      } else {
        wordStack.push(word);
      }
    });
  
    return !wordStack.length;
  }
  
  
  
  
  
  
  
  
  
  
  function findKeywords(str) {
    // make sure all chars are lower case
    const lower = str.toLowerCase();
  
    // split the string into elements on spaces
    const dirty = lower.split(' ');
    const cleaned = [];
  
    // trim each element down to just letters ->
    //    each trimmed word gets pushed into a clean array
    dirty.forEach((element) => {
      let word = '';
      for (let ix = 0; ix < element.length; ix += 1) {
        const charCode = element.charCodeAt(ix);
  
        // charCodes for lower case letters between a and z
        if (charCode >= 97 && charCode <= 122) {
          word += element[ix];
        } else if (word.length > 0) {
          cleaned.push(word);
          word = '';
        }
      }
      // make sure we add the final word
      // check to make sure the element actually had letters
      // before pushing to cleaned array;
      if (word.length > 0) cleaned.push(word);
  
    });
  
    return cleaned;
  }
  
  
  
  
  
  // without regex
  function matchWord(str) {
    var keywords = findKeywords(str);
    var wordStack = [];
  
    console.log({ str, keywords });
  
    keywords.forEach((word) => {
      const index = wordStack.length - 1;
      const stackTop = (wordStack[index] || '');
      const reversed = word.split('').reverse().join('');
  
      if (reversed === stackTop) {
        wordStack.pop();
      } else {
        wordStack.push(word);
      }
    });
    return !wordStack.length;
  }

module.exports = matchWord;
