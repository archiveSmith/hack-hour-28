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
/**
 * input: number
 * output: string
 * GS: have to have a set of characters before with blanks and remaining characters in stars

 */
function drawStairs(n) {
    // create an array with empty string first for n times
        // using array.fill
    const line = Array(n).fill(' ');
    // add stars at the end of the array from one to n times 
        // using for loop, starting from the end index [n - 1]
    for (let i = n - 1; i >= 0; i -= 1) {
        line[i] = '*';
        // convert the array to string
        console.log(line.join(''));
    }
}


module.exports = drawStairs;
