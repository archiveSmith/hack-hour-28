/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let aArr = [];
  let bArr = [];

  /* Use for loop to divide a and b and store any values that don't return a remainder. */

  for (let i = 1; i < a / 2 + 1; i++) {
    if (a % i === 0) {
      aArr.push(i);
    }
  }
  for (let j = 1; j < b / 2 + 1; j++) {
    if (b % j === 0) {
      bArr.push(j);
    }
  }

  /* Compare aArr to bArr and return the highest matching value */
  aArr = aArr.reverse();
  bArr = bArr.reverse();

  if (aArr[0] > bArr[0]) {
    for (let k = 0; k < aArr.length; k++) {
      for (let m = 0; m < bArr.length; m++) {
        if (aArr[k] === bArr[m]) {return aArr[k]}
      }
    }
  } else {
    for (let k = 0; k < bArr.length; k++) {
      for (let m = 0; m < aArr.length; m++) {
        if (bArr[k] === aArr[m]) {return aArr[k]}
      }
    }
  }
}

module.exports = gcd;