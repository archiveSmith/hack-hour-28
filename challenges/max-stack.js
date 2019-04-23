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
  this.length = 0;
  this.max = {
    idx: 0,
    val: Number.NEGATIVE_INFINITY
  };
}
Stack.prototype.setNewMax = function() {
  for (let i in this.storage) {
    if (this.storage[i] > this.max.val) {
      this.max.val = this.storage[i];
      this.max.idx = i;
    }
  }
};

Stack.prototype.resetMax = function() {
  this.max.val = Number.NEGATIVE_INFINITY;
  this.max.idx = -1;
  return;
};

Stack.prototype.push = function(val) {
  if (val > this.max.val) {
    this.max.idx = this.length;
    this.max.val = val;
  }
  this.storage[this.length] = val;
  this.length++;
  return this.length;
};

Stack.prototype.pop = function(val) {
  if (!this.length) return undefined;
  else {
    const pop = this.storage[this.length - 1];
    if (pop === this.max.val) {
      this.resetMax();
    }
    delete this.storage[this.length - 1];
    this.setNewMax();
  }
  this.length -= 1;
  return pop;
};

Stack.prototype.getMax = function(val) {
  return this.length === 0 ? undefined : this.max.val;
};

module.exports = Stack;
