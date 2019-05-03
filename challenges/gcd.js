/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */


function grabFactors(num) {
  let i, j;
  const results = []
  num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2)
  for(i; i <= (Math.floor(num / 2)); i += j){
    if(num % i === 0)results.push(i)
  }
  if(results.length === 0) {
    results.push(1);
    results.push(num);
  }
  return results;
}

function gcd(a, b) {
  let smallerNumArr;
  let largerNumSet;
  if(a < b){
    smallerNumArr = grabFactors(a);
    largerNumSet = new Set(grabFactors(b));
  }else {
    smallerNumArr = grabFactors(b);
    largerNumSet = new Set(grabFactors(a));
  }
  for(i = smallerNumArr.length - 1; i >= 0; i -= 1){
    if(largerNumSet.has(smallerNumArr[i])) return smallerNumArr[i];
  }
  return 1
}


module.exports = gcd;
