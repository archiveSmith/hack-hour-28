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
  this.index = 0;
  this.max = -Infinity;
}

Stack.prototype.push = function(value) {
  this.storage[this.index] = value
  this.index++;
}; 

Stack.prototype.pop = function() {
  let saved = this.storage[this.index-1];
  delete this.storage[this.index];
  this.index--;
  return saved;
};

Stack.prototype.getMax = function(){
  if(this.index === 0){
    return undefined
  } else
  let max = Object.values(this.storage)
  return max;
}



module.exports = Stack;