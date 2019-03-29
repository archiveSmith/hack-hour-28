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
    var stairCase = Array(n + 1).fill(' ');
    stairCase[n] = '';
    for (var i = n - 1; i >= 0; i--) {
      stairCase[i] = '*';
      console.log(stairCase.join(" "));
    }
    return stairCase;
  }

module.exports = drawStairs;
