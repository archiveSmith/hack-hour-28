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
    str = str.replace(/[^_ a-zA-Z0-9]/g, '');
   for(let i = 0; i < str.length; i++)
   {

     console.log(str);
     let ch = str[i].toLowerCase();

     if(ch === '')
     {
       return true;
     }

     let dict = {};





   }
}

console.log(matchWord('__END_DNE-----'));  //-> true
console.log(matchWord('__ENDDNE__'));  //-> false       (not separated by a space)
console.log(matchWord('IF()()fi[]'));  //-> true

module.exports = matchWord;
