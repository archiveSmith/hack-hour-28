/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  let newArr = [];


   this.push = function(element)
  {
    newArr.push(element);
    return newArr.length;
  }

  this.pop = function()
  {
    let rev = newArr.pop();
    return  rev;
  }

  this.getMax = function()
  {
    return Math.max(...newArr);
  }
}

module.exports = Stack;
