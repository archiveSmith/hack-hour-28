function subsetSum(array, target, sum = []) {
  let arrayCopy = [...array];
  let num = array.pop();
  
  if (num < target) {
    if (array.includes(target - num)) {
      sum.push(num);
      return true
    }
    subsetSum(arrayCopy.splice(idx, 1), target - num, sum)
  }
  return sum.reduce((total, num) => total + num) === target 
}

module.exports = subsetSum;

console.log(subsetSum([3, 7, 4, 2], 5))