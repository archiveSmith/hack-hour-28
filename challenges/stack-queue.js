/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push() = function(num) {
  this.storage[this.count] = num;
  this.count += 1;
  return this.count;
};
Stack.prototype.pop() = function(num) {
  this.storage[this.count] = num;
  const poppedNum = this.storage[this.count];
  delete this.storage[this.count];
  this.count -= 1;
  return poppedNum;
};


/**
* Queue Class
*/


function Queue() {
  this.stack1 =[];
  this.stack2 = [];

};

Queue.prototype.enqueue() = function(el) {
  stack1.push(el) 
}
Queue.prototype.dequeue() = function(el) {
  if(stack2.length === 0 || stack1.length === 0) {return 'queue empty'};
  while(stack1.length > 0){
    let poppedEl = stack1.pop();
    stack2.push(poppedEl);
  }
  return stack2.pop();
}

//The following is the code to build a queue without using stacks:

// function Queue() {
//   this.storage = {};
//   this.oldestIndex = 1;
//   this.newestIndex = 1;
// };

// Queue.prototype.size() = function() {
//   return this.newestIndex - this.oldestIndex;
// };

// Queue.prototype.enqueue() = function(data) {
//   this.storage[this.newestIndex] = data;
//   this.newestIndex += 1;
// };

// Queue.prototype.dequeue() = function(data) {
//   if(oldestIndex != newestIndex){
//   this.storage[this.oldestIndex] = data;
//   const dequeuedItem = this.storage[this.oldestIndex];
//   delete this.storage[this.oldestIndex];
//   this.oldestIndex += 1;
//   return dequeuedItem;
//   };
// };

module.exports = {Stack: Stack, Queue: Queue};
