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

  let strArray = str.match(/[a-zA-Z]+/g) || [];
  let store = [];

  for (let i=0; i <strArray.length; i++) {
    let check = strArray[i].toLowerCase().split('').reverse().join('');
    if (check === store[store.length-1]) {
      store.pop();
    } else {
      store.push(strArray[i].toLowerCase());
    }
  }
  return store.length ? false : true;

    // str = str.trim().split('');
    // let storedWord = '';
    // let storedArr = [];
    // for (let i=0; i<str.length; i++) {
    //     if (str[i].match(/[a-z]/gi)) {
    //         storedWord += str[i];
    //     } else if (!str[i].match(/[a-z]/gi))
    //         storedArr.push(storedWord);
    //         storedWord= '';
    //     }
    // }

}

module.exports = matchWord;

// console.log(matchWord('__END_DNE-----'))