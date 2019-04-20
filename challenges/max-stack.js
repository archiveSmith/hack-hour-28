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
  this.max = 0;
}

Stack.prototype.push = function(el) {
  this.storage[this.length] = el;
  if (el > this.max) this.max = el;
  return ++this.length;
}

Stack.prototype.pop = function() {
  if (!this.length) return undefined;

  let popped = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  
  if (popped === this.max) {
    for (let index in this.storage) {
      this.max = 0;
      if (this.storage[index] > this.max) this.max = this.storage[index]
    }
  }
  return --this.length;
}

Stack.prototype.getMax = function() {
  return this.max
}

let x = new Stack();
console.log(x.push(5))
console.log(x.storage);
console.log(x.push(15))
console.log(x.storage);
console.log(x.pop())
console.log(x.storage);
console.log(x.getMax());



module.exports = Stack;