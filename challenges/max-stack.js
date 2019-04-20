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
      return stack.pop();
    },
    getMax: () => {
      return maxVal
    }
  }
}

// const myStack = Stack();

// console.log(myStack.push('foo'));
// console.log(myStack.push('bar'));
// console.log(myStack.push('weeee'));
// console.log(myStack.push('aaaaaa'));
// console.log(myStack.push('zzzzzzzzz'));
// console.log(myStack.getStack());
// console.log(myStack.getMax());

module.exports = Stack;