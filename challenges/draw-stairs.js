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
    for (let i = 1; i <=n; i++) {
        //assign variable for number of stars to be printed and set to i (starting at 1 up to n)
        let starsCount = i;
        //assign variable for number of spaces to print, which would be n - i 
        let spacesCount = n - i;
        console.log(`${' '.repeat(spacesCount)}${'*'.repeat(starsCount)}`);
    }
}


module.exports = drawStairs;
