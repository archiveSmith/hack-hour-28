/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.index = 0;
  this.max = [];
}

Stack.prototype.push = function(value) {
  this.storage[this.index++] = value;
  this.max.push(value);
  this.max.sort((a, b) => b - a);
  return this.index;
};

Stack.prototype.pop = function() {
  if (!this.index) return undefined;
  const popped = this.storage[--this.index];
  delete this.storage[this.index];
  delete this.max[this.max.findIndex(e => e === popped)];
  this.max = this.max.filter(e => e != undefined)
  return popped;
};

Stack.prototype.getMax = function() {
  return this.max[0];
};

let s = new Stack();
console.log(s.getMax());
console.log(s);
console.log(s.push(1));
s.push(2);
s.push(3);
console.log(s.push(4));
console.log(s.getMax());
console.log(s);
console.log(s.pop());
console.log(s.pop());
console.log(s.getMax());
console.log(s.max);

module.exports = Stack;