  
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
  if (n < 0 || n > 100) return 'Please input a number that is between 0 and 100.';
  for (let i = 0; i < n; i += 1) {
    let tempStr = '';
    for (let j = 0; j < n; j += 1) {
      if (j < n - i - 1) tempStr += ' ';
      else tempStr += '*';
    }
    console.log(tempStr);
  }
}
  
  
  module.exports = drawStairs;
  
// drawStairs(3);