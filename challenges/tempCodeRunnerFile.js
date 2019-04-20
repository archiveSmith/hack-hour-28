function highestProduct(array) {
  let highQueue = [0, 0, 0];

  array.forEach(num => {
    //greater than highest
    if (num > highQueue[2]) {
      highQueue.shift();
      highQueue.push(num);
    } else if (num > highQueue[1]) {
      highQueue.shift();
      highQueue.unshift(num);
    } else if (num > highQueue[0]) {
      highQueue[0] = num
    }
  });

  return highQueue
  // highQueue.reduce((sum, num) => sum + num)
}

highestProduct([1, 5, 3, 7, ,4, 8])