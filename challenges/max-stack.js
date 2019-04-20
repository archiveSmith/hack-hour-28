/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  const stack = {
    body: [],
    push: val => stack.body.push(val),
    pop: () => {
      const val = stack.body.pop(stack.body.length - 1);
      return val;
    },
    getMax: () => {
      const body = stack.body;
      return Math.max(...body)
    }
  }
  return stack;
}

module.exports = Stack;