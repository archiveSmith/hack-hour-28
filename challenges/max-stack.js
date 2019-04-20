/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = [];
  this.max = -Infinity;
  this.maxStack = [];
}

Stack.prototype.push = function (val) {
  if (val >= this.max) {
    this.maxStack.push(max);
    this.max = val;
  };
  this.storage.push(val);
  return this.storage.length;
}

Stack.prototype.pop = function () {
  const retval = this.storage.pop();
  if (retval === this.maxStack[this.maxStack.length - 1]) {
    this.maxStack.pop();
    this.max = this.maxStack[length - 1];
  }
  return retval;
}

Stack.prototype.getMax = function () {
  return this.max;
}



module.exports = Stack;