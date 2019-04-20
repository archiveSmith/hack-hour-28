/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack(val) {

    this.push = function (val) {
      let keys = Object.keys(this).length;
      this.[keys] = val;
      return Object.keys(this).length;
  }

    this.pop = function (val) {
      let tempEl = Object.values(this)[Object.values(this).length - 1]
      let index = Object.values(this).length - 1;
      delete this['index'];
      return tempEl;
  }

    this.getMax = function (val) {

  }

}

// let callstack = new Stack
// callstack === {0: '', 1: '', 2: ''};

module.exports = Stack;