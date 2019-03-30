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
    if (n < 1 || n > 100) return Error('input a number between 1 and 100')
// initialize string(n) filled with *
    let output = " ".repeat(n)
    
    for (let i = 0; i < n; i++) {
        output = output.slice(1) 
        output += "*";
        console.log(output);
    }
}

// drawStairs(6);

module.exports = drawStairs;
