/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.stack = [];
  this.push = function (elt) {
    this.stack.push(elt);
    return this.stack.length;
  }
  this.pop = function () {
    let popped = this.stack[this.stack.length - 1];
    this.stack = this.stack.slice(0, -1);
    return popped;
  }
  this.getMax = function () {
    return Math.min(...this.stack);
  }

}

module.exports = Stack;