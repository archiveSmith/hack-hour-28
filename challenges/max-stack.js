/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stack = {};
  this.length = 0;
}

Stack.prototype.push = function (val) {
  this.stack[this.length++] = val; 
  
}

Stack.prototype.pop = function () {

 let removedVal = this.stack[this.length - 1]
 delete this.stack[this.length - 1]
 this.length--;
 return removedVal;

}

Stack.prototype.getMax = function () {
  let max = 0; 

  if(this.length = 0) {return undefined};

  for (let key in this.stack) {
    if (this.stack[key] > max) {
      max = this.stack[key];
    }
  }
  return max;
}


// let test = new Stack();


// test.push(3)
// test.push(5)
// test.push(8)
// test.push(2)
// test.push(4)
// console.log(test);
// test.pop();
// console.log(test)

// console.log(test.getMax());








module.exports = Stack;