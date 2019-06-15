/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */

//input: number
//output number

//iterate on the number; sub-track n from each element
//and increase each element at array[i] by 1; max is 2 on each element and total max = num

function countStairs(n) {
  //output array to count the length (subarr).
  const holderArr = [];
  //subarr to hold the different ways
  const subArr = [];
  for(let i = 0; i < n; i++){
    let track = n;
    if(track > 0){
      subArr.push(track-i)
      track -= i;
    }
    holderArr.push(subArr)
  }

}

module.exports = countStairs;
