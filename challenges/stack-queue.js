/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.storage = [];
    this.length = 0;
}
Stack.prototype.push = function(val) {
    this.storage[this.length] = val;
    this.length++;
    return this.length;
}

Stack.prototype.pop = function() {
    const popped = this.storage[this.length-1];
    this.length--;
    delete this.storage[this.length];
    return popped;
}


/**
* Queue Class
*/


function Queue() {
    this.first = new Stack;
    // console.log(first)
    this.second = new Stack;
    this.length = 0;

}

Queue.prototype.enqueue = function(val) {
    this.first.push(val);
    // console.log(this.first)
    return this.first.length;
}

Queue.prototype.dequeue = function() {
    if(this.second.length === 0) {
        if(this.first.length === 0) {
            return [];
        }
        while(this.first.length > 0) {
            let poppedVal = this.first.pop();
            this.second.push(poppedVal);
        }
    }
    let poppedOff = this.second.pop();
    console.log(this.second);
    return poppedOff;
}

let que = new Queue;
console.log(que.enqueue(1));
console.log(que.enqueue(2));
console.log(que.enqueue(3));
console.log(que.dequeue());
console.log(que.dequeue());

module.exports = {Stack: Stack, Queue: Queue};
