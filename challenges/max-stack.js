/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {

  this.length = 0;
  this.data = [];
  this.max = -Infinity;

}

Stack.prototype.push = function(ele) {
  this.data.push(ele);
  if(ele > this.max) this.max = ele;

  return ++this.length;

}

Stack.prototype.pop = function() {
  if(this.data.length > 0) {
    let ele = this.data.pop();
    if(ele === this.max) {
      this.max = Math.max(...this.data);
    }

    this.length--;
    return ele;
  }
  else {
    return undefined;
  }
}

Stack.prototype.getMax = function () {
  return this.max;
}

/*
let stack = new Stack;

console.log(stack.push(3))
console.log(stack.push(10));
stack.push(13);
stack.push(4);

console.log(stack.pop());
console.log(stack.length)
console.log(stack.pop());

console.log(stack.getMax());
*/

module.exports = Stack;
