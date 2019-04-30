/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.length = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.length++] = value
  return this.length;
}; 


Stack.prototype.pop = function() {
  let saved = this.storage[this.length-1];
  delete this.storage[this.length-1];
  this.length--;
  return saved;
};


/**
* Queue Class
*/


function Queue() {
  this.stack1 = {};
  this.stack2 = {};
  this.length1 = 0;
  this.lenght2 = 0;
}

Queue.prototype.push = function(value) {
  this.stack1[this.length1++] = value
  return this.length1;
}; 

Queue.prototype.push2 = function(val) {
  this.stack2[this.length2++] = val
  return this.lengt2h;
}

Queue.prototype.pop = function(){
  let stack1Last = this.stack1[this.length-1];
  delete this.stack1[this.length-1];
  this.length1--;
  Queue.prototype.push2(this.stack1Last);
}

Queue.prototype.pop2 = function(){
  this.saved = this.stack2[this.length2-1];
  delete this.stack2[this.length-2];
  return this.saved;
}
module.exports = {Stack: Stack, Queue: Queue};
