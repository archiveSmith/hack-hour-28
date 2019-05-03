/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.stack = {},
    this.index = 0
}

Stack.prototype.push = function(obj) {
    this.stack[this.index++] = obj;
}

Stack.prototype.pop = function(){
    const topOfStack = this.stack[this.index - 1];
    delete this.stack[this.index - 1];
    if(this.index > 1) this.index--;
    return topOfStack
}

/**
* Queue Class
*/


function Queue() {
     this.processing = new Stack;
     this.waiting = new Stack;
}

Queue.prototype.enQueue = function(task){
    if(this.processing.index === 0) this.processing.push(task);
    else this.waiting.push(task) 
}

Queue.prototype.deQueue = function(){
    let cache = this.processing.stack[this.processing.index - 1];
    if(this.processing.index > 0) {
        this.processing.pop();
        if(this.waiting.index > 0) {
            this.processing.push(this.waiting.pop())
        }
    }
    return cache
}

let newS = new Stack;
newS.push(5)
console.log(newS.pop())
console.log(newS)

module.exports = {Stack: Stack, Queue: Queue};
