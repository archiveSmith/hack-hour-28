/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.data = [];
  this.length = 0;
}

Stack.prototype.push = function(ele)  {
  this.data.push(ele);
  this.length++;
}

Stack.prototype.pop = function () {
  let ele = this.data.length > 0 ? this.data.pop() : undefined;
  if(ele) this.length--;
  return ele;
}

/**
* Queue Class
*/


function Queue() {
 this.pushStack = new Stack;
 this.popStack = new Stack;
}

Queue.prototype.push = function(ele) {
  this.pushStack.push(ele);
}

Queue.prototype.pop = function() {
  if(this.popStack.length === 0) {
    if (this.pushStack.length === 0) {
      return undefined;
    } else {
      // push all pushed elements from pushStack to popStack for popping
      let length = this.pushStack.length; console.log(length);
      for(let i = 0; i < length; i++) {
        //console.log(this.pushStack.data[i])
        this.popStack.push(this.pushStack.pop());
      }
    }
  }
  return this.popStack.pop();
}

/*
let q = new Queue;

q.push(1); q.push(2); q.push(3); q.push(4);

console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
*/

module.exports = {Stack: Stack, Queue: Queue};
