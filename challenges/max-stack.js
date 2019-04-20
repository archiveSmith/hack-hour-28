/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.name = name;
  this.storage = [];
  this.length = 0
}

Stack.prototype.push = function(element) {
  this.length++
  return this.storage.push(element)
}
Stack.prototype.pop = function() {
  this.length--
  return this.storage.pop()
}
Stack.prototype.getMax = function() {
 return Math.max(...this.storage)
}

let jasonStack = new Stack();
console.log(jasonStack)

jasonStack.push(12)

console.log(jasonStack.getMax())
module.exports = Stack;




