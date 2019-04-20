/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = {};
  this.idx = 0;
}

Stack.prototype.push = function(val) {
  this.storage[this.idx++] = val;
  return this.idx;
};

Stack.prototype.pop = function(val) {
  if (!this.idx) return undefined;
  const pop = this.storage[--this.idx];
  delete this.storage[this.idx];
  return pop;
};

Stack.prototype.getMax = function(val) {
  //return the largest value currently in the stack
  let max = 0;
  let curVal = 0;
  for (let i = storage.length - 1; i >= 0; i -= 1) {
    curVal = this.storage[i];
    max = curVal;
    delete this.storage[i];
  }
  return max;
};

module.exports = Stack;
