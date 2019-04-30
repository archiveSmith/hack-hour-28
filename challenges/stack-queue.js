/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.length = 0;
  this.stack = {};
}

Stack.prototype.push = function (item) {
  this.store[this.length] = v;
  this.length += 1;
  return this.length;
}

Stack.prototype.pop = function () {
  if (this.length === 0) return undefined;

  const popped = this.store[this.length - 1];

  delete this.store[this.length - 1];

  this.length -= 1;
  return popped;
};

/**
* Queue Class
*/


function Queue() {
  const stack1 = new Stack();
  const stack2 = new Stack();
}

Queue.prototype.enqueue = function (element) {
  this.stack1.push(element);
}

Queue.prototype.dequeue = function () {
  if (this.stack2.length === 0) {
    if (this.stack1.length === 0) { return undefined; }
    while (this.stack1.length > 0) {
      var p = this.stack1.pop();
      this.stack2.push(p);
    }
  }
  return this.stack2.pop();
}

module.exports = { Stack: Stack, Queue: Queue };
