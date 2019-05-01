/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.store = {};
  this.length = 0;
}

Stack.prototype.push = function (val) {
  this.store[this.length] = val;
  this.length++;
}

Stack.prototype.pop = function (val) {
  if ( this.length === undefined ) {
    return undefined
  }

  let holder = this.store[length - 1];
  delete this.store[length - 1];
  this.length--;
  return holder;
}


/**
* Queue Class
*/


function Queue() {
  
}

module.exports = {Stack: Stack, Queue: Queue};
