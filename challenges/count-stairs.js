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
  let sum = 0;
  for(let i = 0; i <= n/2; i++) {
    sum += binomial(n - i, i);
  }
  return sum;

}

function binomial (n, k) {
  return factorial(n)/(factorial(n - k)*factorial(k));
}

let factorials = {0: 1}
function factorial(n) {
  if(!factorials.hasOwnProperty(n))
    factorials[n] = n*factorial(n - 1);

  return factorials[n];
}

/*
console.log(countStairs(3));
console.log(countStairs(4));
console.log(countStairs(5));
console.log(factorials);
*/

module.exports = countStairs;
