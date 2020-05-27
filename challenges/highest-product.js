/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
console.log(-1 < null);
function highestProduct(array) {
  let highQueue = [];

  array.forEach(num => {
    if (!highQueue.length) highQueue.push(num)
    if (num > highQueue[highQueue.length - 1]) {
      highQueue.push(num);
    } else if (num > highQueue[1]) {
      highQueue.unshift(num);
    } else if (num > highQueue[0]) {
      highQueue[0] = num
    }
    if (highQueue.length > 3) highQueue.shift();
    console.log(highQueue);
  });

  return highQueue.reduce((sum, num) => sum * num)
}

highestProduct([-1,-2,-3, 1])
module.exports = highestProduct;
