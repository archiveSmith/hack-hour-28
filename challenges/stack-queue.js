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
    this.storage = {};
    this.index = 0;

    this.push = function (val) {
        storage[this.index++] = value;
    };
    this.pop = function (val) {
        if (!index) return undefined;
        const poppedVal = storage[--index];
        delete storage[index];
        return poppedVal;
    };
}

/**
* Queue Class
*/

function Queue() {
    this.pushS = new Stack();
    this.popS = new Stack();
}

Queue.prototype.enque = function (val) {
    this.pushS[this.length++] = val;
}

Queue.prototype.deque = function (val) {
    let poping = this.popS;
    let pushing = this.pushS;

    if (poping.top) {
        let deq = poping.pop();
        console.log('Dequeing ' + deq + ' from stack.');
        return deq;
    }

    while (pushing.top) {
        poping.push(pusing.pop());
    }
}

module.exports = { Stack: Stack, Queue: Queue };

let q1 = new Queue();

q1.enque(1);
q1.enque(2);
q1.enque(3);
q1.enque(4);
q1.enque(5);
q1.deque();
q1.deque();
q1.deque();
q1.deque();
console.log('Current stat of the Queue is stored saved in the popS');
console.log(q1);