/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */


function Stack() {
    this.storage = {},
    this.index = 0;
}

Stack.prototype.push = function (value) {
  this.storage[this.index] = value;  // storage at index/key 0 is equal to the passed value.
  this.index++; // Increment the index by one (represents the length)
  return this.index;
}

Stack.prototype.pop = function() {
  let stored = this.storage[this.index - 1];  // store value at last index
  delete this.storage[this.index - 1]; // delete value at last index
  this.index--; // decrement index (length)
  return stored; // return stored value
}

Stack.prototype.getMax = function() {
  let accessStore = this.storage; // Save our object
  let numArr = Object.values(accessStore); // Access num values
  return Math.max(...numArr); // Return the max
}


let newNode1 = new Stack();
console.log(newNode1);
newNode1.push('15');
console.log(newNode1);
newNode1.push('100');
console.log(newNode1);

newNode1.push('10');
console.log(newNode1);
newNode1.push('301');
console.log(newNode1);

console.log(newNode1.getMax());







module.exports = Stack;