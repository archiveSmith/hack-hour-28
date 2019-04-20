/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.stack = {},
  this.length = 0,
  this.push = (el) => {
    this.stack[this.length] = el;
    this.length += 1;
    return this.length;
  }
  this.pop = () => {
    if(this.length < 1) return null;
    temp = this.stack[this.length - 1]
    delete this.stack[this.length - 1];
    this.length -= 1;
    return temp;
  }

  this.getMax = () =>{
    return Math.max(...Object.values(this.stack));
  }
}


module.exports = Stack;
