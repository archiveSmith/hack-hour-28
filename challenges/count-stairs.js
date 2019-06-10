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

// find every ways to reach the given n adding 1 and 2

// recursive way O(2^n);
function countStairs(n) {
  if (n < 2) return n;
  return countStairs(n - 1) + countStairs(n - 2);
}

// while loop O(n)
function countStairs1(n) {
  let a = 1;
  let b = 0;
  let temp;
  while (n >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }
  return b;
}

console.log(countStairs1(5));

module.exports = countStairs;
