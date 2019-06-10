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

function countStairs(n) {
  let num = n
  let a = 1, b = 0, temp;
  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num -= 1;
  }
  return b;
}

console.log(`${countStairs(5)} --> Should equal: 8`);
console.log(`${countStairs(4)} --> Should equal: 5`);
console.log(`${countStairs(3)} --> Should equal: 3`);
console.log(`${countStairs(2)} --> Should equal: 2`);

module.exports = countStairs;
