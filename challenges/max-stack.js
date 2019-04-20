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
  this.max;
}

Stack.prototype.push = function(val) {
  if(Object.keys(this.storage).length === 0) {
    this.max = val;
  } 
  if(this.max < val) {
    this.max = val;
  }
  this.storage[this.length] = val;
  this.length++;
  return this.length;
}

Stack.prototype.pop = function() {
  const poppedVal = this.storage[this.length-1];
  this.length--;
  delete this.storage[this.length];
  if(poppedVal === this.max) {
    const maxVal = Object.values(this.storage);
    const value = Math.max(...maxVal);
    this.max = value;
  }
  return poppedVal;
}

Stack.prototype.getMax = function() {
  if(!this.storage[this.length-1]) {
    return undefined;
  }
  return this.max;
}

let stack = new Stack
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(10));
console.log(stack);
console.log(stack.getMax()); // 10
console.log(stack.pop())
console.log(stack)
console.log(stack.getMax()); // 10

module.exports = Stack;