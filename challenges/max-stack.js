/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // create a stack
  this.stack = [];
  this.length = 0;
}

// push: return new length
Stack.prototype.push = (val) => {
  this.stack[this.length] = val;
  return ++this.length;
}

// pop: return element just removed
Stack.prototype.pop = () => {
  if (this.length === 0) return undefined;
  let temp = this.stack[--this.length];
  delete this.stack[this.length];
  return temp;
}

// getMax: return largest value currently in stack
  // bonus: retrieve max calue from stack in 0(1) time
  Stack.prototype.getMax = () => {
    if (this.length === 0) return undefined;
    let max = null;
    this.stack.forEach((num) => {
      if (max === null || max < num) max = num;
    });
    return max;
}

module.exports = Stack;