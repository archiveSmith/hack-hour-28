/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  let strang = str;
  let loopInd = 0;

  let combos = [str];

  //O(n!) in complexity... kinda swapLetters is O(n) so maybe more like O(n*n!)
  while(loopInd < str.length) {
    const newCombos = [];
    combos.forEach((ele) => {
      for(let j = loopInd; j < ele.length; j++) {
        newCombos.push(swapLetters(ele, loopInd, j));
      }
    })
    combos = newCombos;
    loopInd++;
  }

  //console.log(combos);

  for(let i = 0; i < combos.length; i++) {
    if(isPalindrome(combos[i])) return true;
  }

  return false;
}

//console.log(permPalin('cbaba'));

function swapLetters(str, i, j) {
  let strArr = str.split('');
  [strArr[i], strArr[j]] = [strArr[j], strArr[i]];
  return strArr.join('');
}

//console.log(swapLetters('abc', 0, 2));

function isPalindrome(str) {

  for(let i = 0; i < str.length/2; i++) {
    if(str[i] != str[str.length-1-i]) return false;
  }

  return true;
}

module.exports = permPalin;
