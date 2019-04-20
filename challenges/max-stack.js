/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {}
  this.index = 0;
}

Stack.prototype.push = function (value) {
  this.storage[this.index] = value;
  this.index +=1
}

Stack.prototype.pop = function () {
  const lastElement = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index -= 1
  return lastElement;
}

Stack.prototype.getMax = function() {
if (this.index === 0) {
  return undefined;
}
  let max = 0;
  for (let i = 0; i < this.index; i++) {
    if (this.storage[i] > max)
      max = this.storage[i]
  }
  return max;
}

let stack = new Stack;
stack.push(5)
stack.push(8)
stack.push(4)
// stack.pop()
console.log(stack.getMax())


console.log(stack)
module.exports = Stack;