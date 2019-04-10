/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
  let thou = Math.floor(n/1000);
  let huns = Math.floor((n - (thou*1000))/100);
  let tens = Math.floor((n-(thou*1000)-(huns*100))/10); 
  let ones = Math.floor(n-(thou*1000)-(huns*100)-(tens*10)); 
  let hStr = '';
  let tStr = '';
  let oStr = '';
  if (huns >= 0 && huns < 4) hStr = (Array(huns+1).join('C'));
  else if (huns === 4) hStr = 'CD';
  else if (huns === 5) hStr = 'D';
  else if (huns > 5 && huns < 9) hStr = 'D' + (Array(huns-5+1).join('C'));
  else if (huns === 9) hStr = 'CM';
  
  if (tens >= 0 && tens < 4) tStr = (Array(tens+1).join('X'));
  else if (tens === 4) tStr = 'XL';
  else if (tens === 5) tStr = 'L';
  else if (tens > 5 && tens < 9) tStr = 'L' + (Array(tens-5+1).join('X'));
  else if (tens === 9) tStr = 'XC';

  if (ones >= 0 && ones < 4) oStr = (Array(ones+1).join('I'));
  else if (ones === 4) oStr = 'IV';
  else if (ones === 5) oStr = 'V';
  else if (ones > 5 && ones < 9) oStr = 'V' + (Array(ones-5+1).join('I'));
  else if (ones === 9) oStr = 'IX';

  let thStr = (Array(thou+1).join('M'));
  return thStr + hStr + tStr + oStr;
}




console.log(romanNumeral(10));


module.exports = romanNumeral;
