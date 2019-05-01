/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = []
}
Stack.prototype.push = function (item) {
  this.stack.push(item)
}
Stack.prototype.pop = function () {
  return this.stack.pop()
}

let r = [];
r.push(3)//?
r.push(8)
r.push(6)
r
let run = new Stack;
run
run.push(function ty() { })//?
run.push(5)//?
run.push(5)//?
run.stack//?
run.stack//?
run.pop(5)//?
/**
* Queue Class
*/


function Queue() {
  this.stack1 = new Stack;
  this.stack2 = new Stack;
}

Queue.prototype.enqueue = function (item) {
  this.stack1.push(item)
}

Queue.prototype.dequeue = function () {
  // while (this.stack1[0]) {
  //   this.stack1[ 0 ]
  //   this.stack2.push(this.stack1.pop());
  // }
  this.stack1.pop()//?
  return this.stack2.pop()
}


let q = new Queue;
q.enqueue(4)
q.enqueue(5)
q.enqueue(7)
q.enqueue(8)
q
q.dequeue()//?
q.dequeue()//?
module.exports = { Stack: Stack, Queue: Queue };
