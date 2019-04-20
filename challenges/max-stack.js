/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  const stack = [];
  let maxVal = -Infinity;

  return {
    push: (data) => {
      stack.push(data);
      data > maxVal ? maxVal = data : maxVal = maxVal;
      return stack.length;
    },
    // getStack: () => {
    //   return stack;
    // },
    pop: () => {
      if (stack.length === 0) {
        return undefined;
      }
      const poppedVal = stack.pop();
      // if stack length becomes zero, set maxVal to undefined
      if (stack.length === 0) maxVal = undefined;
      // find next highest value and set it to maxVal
      maxVal = Math.max(...stack);
      return poppedVal;
    },
    getMax: () => {
      return maxVal
    }
  }
}

// const myStack = Stack();

// console.log(myStack.pop());
// console.log(myStack.getStack());
// console.log(myStack.getMax());

module.exports = Stack;