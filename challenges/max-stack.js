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
  this.maxStack = [-Infinity];
}

Stack.prototype.push = function (val) {
  if (val >= this.max) {
    this.maxStack.push(val);
    this.max = val;
  };
  this.storage.push(val);
  return this.storage.length;
}

Stack.prototype.pop = function () {
  const retval = this.storage.pop();
  if (retval == this.maxStack[this.maxStack.length - 1]) {
    this.maxStack.pop();
    this.max = this.maxStack[this.maxStack.length - 1];
  }
  return retval;
}

Stack.prototype.getMax = function () {
  if(this.storage.length === 0 ) return undefined;
  return this.max;
}


let bob = new Stack;

bob.push(4);
bob.push(8);
bob.push(4);
bob.push(12);

let out = bob.pop();
bob.pop();

console.log(bob.getMax());



module.exports = Stack;