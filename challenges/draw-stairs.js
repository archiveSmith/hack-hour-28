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
  let holderArr = [];
  let spaces = " ";
  let asterisk = "*";
  
  //start off with an array of n spaces
  for(let i = 0; i < n; i++){
    holderArr.push(spaces);
  }
  
  //need a pointer to replace the space with asterisk 
  let s = n-1;
  
  //need a helper function to console.log
  const helpPrint = (num) => {
//moving from right to left replace the space with asterisk
    let reArr = holderArr.splice(s,1,asterisk);
    if(num === 0){
      return holderArr.join("");
    }
    console.log(holderArr.join(""));
  s--;
  num--;
  helpPrint(num);
  };
  
 return helpPrint(n);
 
}

//drawStairs(6)

module.exports = drawStairs;
