/**
 * Create a stack.Then create a queue using two stacks.
 */

/**
 * STACK is LIFO, QUEUE is FIFO
 * How to pop out the element in reverse order
 * a stack for inbox, storing all the pushed elements
 * second stack for outbox, storing elements in reverse order
 * pushing elements to first box, poping from second box
 */

function Stack() {
    this.items = [];
};

Stack.prototype.push = function (item) {
    this.items.push(item);
};

Stack.prototype.pop = function () {
    return this.items.pop();
};

Stack.prototype.isEmpty = function () {
    return this.items.length;
};

/**
* Queue Class
*/

function Queue() {
    this.pushS = new Stack();
    this.popS = new Stack();
}

Queue.prototype.enque = function (val) {
    this.pushS.push(val);
}

Queue.prototype.deque = function () {
    if (this.popS.isEmpty()) {  // if(this.popS.index > 0)
        while (!this.pushS.isEmpty()) {
            this.popS.push(this.pushS.pop());
        }
    }
    return this.popS.pop();
}

module.exports = { Stack: Stack, Queue: Queue };

let q1 = new Queue();

q1.enque(1);
console.log(q1);
q1.enque(2);
console.log(q1);
q1.enque(3);
console.log(q1);
q1.enque(4);
console.log(q1);
q1.enque(5);
console.log(q1);
q1.deque();
console.log(q1);
q1.deque();
// q1.deque();
// q1.deque();
console.log('Current stat of the Queue is stored saved in the popS');
console.log(q1);