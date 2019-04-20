/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // push returns a new length and adds to the stack
  // pop removes and returns last element
  // getMax should return largest value in the stack
  this.storage = {};
  this.length = 0;
}

Stack.prototype.push = function(val) {
  this.storage[this.length] = val;
  this.length++;
  return this.length;
}

Stack.prototype.pop = function() {
  const poppedVal = this.storage[this.length-1];
  this.length--;
  delete this.storage[this.length];
  return poppedVal;
}

Stack.prototype.getMax = function() {
  let vals = Object.values(this.storage);
  return Math.max(...vals);
}

// let stack = new Stack
// console.log(stack.push(1));
// console.log(stack.push(2));
// console.log(stack.push(10));
// console.log(stack);
// console.log(stack.getMax());
// console.log(stack.pop())
// console.log(stack)
// console.log(stack.getMax());

module.exports = Stack;