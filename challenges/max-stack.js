/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stack = [[]];
  this.length = 0;
  this.maxValue = 0;


  Stack.prototype.push = val => {
    this.stack[0][this.length] = val;
    this.length += 1;
    if (this.maxValue < val) {
      this.maxValue = val
    };
    return this.length;
  }

  Stack.prototype.pop = () => {
    const element = this.stack[0][this.length - 1];
    delete this.stack[0][this.length - 1];
    this.length -= 1;
    return element;
  }

  Stack.prototype.maxVal = () => {
    if (!this.stack[0].includes(this.maxValue)) {
      this.maxValue = this.stack[0].reduce((acc, current) => {
        return acc = Math.max(acc, current);
      }, 0)
    }
    return this.maxValue;
  }

}


const test = new Stack();
console.log(test.push(5));
console.log(test.push(7));
console.log(test.push(6));
console.log(test.push(9));
console.log(test.pop());
console.log(test.maxVal())

module.exports = Stack;