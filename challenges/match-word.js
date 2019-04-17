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

    const alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const wordList = []; 
    let tracker = '';
    let match = false;
    if (str === '') return true;
    for (let i = 0; i < str.length; i += 1) {

        if (alph.includes(str[i].toLowerCase())) {
            tracker += str[i].toLowerCase();
        
        } else if (tracker != '' && !alph.includes(str[i])) {
            wordList.push(tracker);
            tracker = '';
        } else if (i === str.length - 1 && tracker != '') {
            wordList.push(tracker);
        }
    }
    
    console.log(wordList)
    if (wordList.length === 1 && wordList[0] != '') return false;

    wordList.forEach(word => {
        // let match = word.split('').reverse().join('');
        console.log(word)
        for (let i = wordList.length - 1; i >= 0; i -= 1) {
            console.log(wordList[i])
            console.log(word)
            console.log(wordList[i].split('').reverse().join(''))
            if (wordList[i].split('').reverse().join('') === word) {
                match = true;
            } else if (wordList[i].split('').reverse().join('') != word) {
                match = false;
            }
        }
    })
    return match;
}


// console.log(matchWord('__END_DNE-----'));
// console.log(matchWord('__ENDDNE__'));
// console.log(matchWord('IF()()fi[]'));
console.log(matchWord('for__if__rof__fi'));
// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
// console.log(matchWord(''));



module.exports = matchWord;
