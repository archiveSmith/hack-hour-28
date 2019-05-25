/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
     this.storage = [];

    Stack.prototype.push = function (val) {
        this.storage.push(val);
    }

    Stack.prototype.pop = function () {
        return this.storage.pop();
    }

    Stack.prototype.getLength = function (){
        return this.storage.length;
    }
}
 

/**
* Queue Class
*/


function Queue() {
    this.storage = new Stack();
    this.temp = new Stack();

    Queue.prototype.enqueue = function (val){
        this.storage.push(val);
    }

    Queue.prototype.dequeue = function (val){
        
        while(this.storage.getLength() > 1){
            this.temp.push(this.storage.pop());
        }
        const output = this.storage.pop();
        while(this.temp.getLength() != 0 ){
            this.storage.push(this.temp.pop())
        }
        return output;
    }
}



// let meinStack = new Stack();

// meinStack.push(1);
// meinStack.push(1);
// meinStack.push(1);
// meinStack.push(1);
// let out = meinStack.push(4);

// out
// meinStack.pop();
// meinStack.pop();
// meinStack.pop();
// meinStack.pop();
// out = meinStack.getLength();

// out

// let meinQ = new Queue();
// meinQ.enqueue(5)
// meinQ.enqueue(8)
// meinQ.enqueue(7)
// meinQ.enqueue(10)
// meinQ.enqueue(12)

// console.log(meinQ.dequeue());
// console.log(meinQ.dequeue());
// console.log(meinQ.dequeue());
// console.log(meinQ.dequeue());
// console.log(meinQ.dequeue());
// console.log(meinQ.dequeue());
// console.log(meinQ.dequeue());
// console.log(meinQ.dequeue());



module.exports = { Stack: Stack, Queue: Queue };
