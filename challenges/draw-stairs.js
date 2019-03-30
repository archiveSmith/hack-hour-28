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
  const line = Array(n + 1).fill(' ');
  for (let i = n - 1; i >= 0; i--) {
    line[i] = '#';
    console.log(line.join(''));
  }
}

console.log(drawStairs(10));

module.exports = drawStairs;
