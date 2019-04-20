/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.length = 0;
  this.max = -Infinity;
  this.push = (element) => {
    if (element > this.max) this.max = element;
    this[ this.length ] = element;
    this.length += 1;
    return this.length;
  }
  this.pop = () => {
    let returnVal = this[ this.length - 1 ];
    delete this[ this.length - 1 ];
    this//?
    this.length -= 1;
    let remainingMax = Object.values(this).sort((a, b) => b - a);
    remainingMax
    if (returnVal === this.max) this.max = remainingMax[ 1 ];
    return returnVal;
  }
  this.getMax = () => {
    return this.max;
  }
}


module.exports = Stack;