/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  const storage = [];
  let max = -Infinity;
  const maxStack = [];

  function push(val) {
    if (val > max) { 
      maxStack.push(max);
      max = val;
    };
    storage.push(val);
  }

  function pop() {
    const retval = storage.pop();
    if(retval === maxStack[maxStack.length - 1]){
      maxStack.pop();
      max = maxStack[length-1];
    }
    return retval;
  }

  function getMax() {
    return max;
  }


}

module.exports = Stack;