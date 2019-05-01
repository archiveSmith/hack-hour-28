/**
 * Create a stack.Then create a queue using two stacks.
 */

// stack has two methods
// push
// pop
function Stack() {
  this.obj = {};
  this.length = 0;
}

Stack.prototype.push = function (input) {
  this.obj[length] = input;
  this.length++;
  return this.length;
}
Stack.prototype.getStack = function () {
  return this.obj;
}
Stack.prototype.pop = function () {
  let temp = this.obj[this.length - 1];
  delete this.obj[this.length];
  this.length--;
  return temp;
}


const myStack = new Stack();
myStack.push('foo');
myStack.push('bar');
myStack.getStack(); //?

// const myStack = new Stack();
// myStack.push('foo'); //?
// myStack.push('bar');
// myStack.getStack(); //?
// myStack.pop(); //?
/**
 * Queue Class
 */

// enqueue

function Queue() {
  // enqueue
  // push input to stack 1
  const stack1 = new Stack();
  const stack2 = new Stack();

  function enqueue(value) {
    stack1.push(value);
    console.log(stack1.getStack());
    // transfer value from stack 1 to stack 2
    stack2.push(stack1.pop());
  }

  function dequeue() {
    return stack2.pop();
  }

  function getQueue() {
    return stack2;
  }

  return {
    enqueue: enqueue,
    dequeue: dequeue,
    getQueue: getQueue
  }
}

const myQueue = new Queue();
myQueue.enqueue('alana');
myQueue.enqueue('matt');
// myQueue.enqueue('jon');
myQueue.getQueue(); //?

module.exports = {
  Stack: Stack,
  Queue: Queue
};