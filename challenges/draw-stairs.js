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
  if (n > 0 && n < 101) {
    for (let i = 1; i <= n; i++) {
      console.log((Array(n - i + 1).join(' ')) +  (Array(i + 1).join('*')));
    }
  } else console.log('Enter a number from 1 to 100!')
}
drawStairs(10);


module.exports = drawStairs;
