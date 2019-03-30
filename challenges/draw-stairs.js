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
// initialize string(n) filled with *
    if (n === 0) return ' '
    let output = '*'
    
    while (output.length <= n) {
        console.log(output);
        output += '*';
    }
}

console.log(drawStairs(7));

module.exports = drawStairs;
