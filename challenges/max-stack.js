/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */
function Stack() {
  this.stacks = {};
  this.length = 0;

}

Stack.prototype.push = function(value) {
  this.stacks[this.length] = value;
  this.length += 1;
  return this.length;
};

Stack.prototype.pop = function() {
  if (this.length === 0) {
    return undefined;
  } else {
    let temp = this.stacks[this.length-1];
    delete this.stacks[this.length-1];
    this.length -= 1;
    return temp;
  }
}

// Stack.prototype.getMax = (stacks) => {
//   if (this.length === 0) return undefined;
//   if (this.length === 1) return this.stacks[0];
//   let max = this.stacks[0];
//   for (let keys in stacks) {
//     if (this.stacks[keys] > max) {
//       max = this.stacks[keys];
//     }
//   }
//   return max;
// }

let stacks = new Stack();
stacks.push(2)
stacks.push(1)
stacks.push(3)
 stacks.pop()
//  stacks.getMax()
 console.log(stacks);





module.exports = Stack;