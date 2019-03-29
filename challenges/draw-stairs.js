/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
    // length of stairs is n
    // iterate through n starting i at 1
    // spaces are n - i
    // stars are i
    // console.log each time
    let result = '';
    for (let i = 1; i <= n; i += 1) {
        const newLineChar = (i === n) ? '' : '\n';
        result += `${' '.repeat(n - i)}${'*'.repeat(i)}${newLineChar}`;
    }
    return result;
}

module.exports = drawStairs;