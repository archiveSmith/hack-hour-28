/**
 * Create a stack.Then create a queue using two stacks.
 */


const Stack1 = [];
const Stack2 = [];


function Stack(el) {
  Stack1.push(el);
}


/**
* Queue Class
*/


function Queue() {
  if (Stack2.length === 0) {
    if (Stack1.length === 0) return 'Queue is empty'
    while (Stack1.length > 0) {
      let i = Stack1.pop();
      Stack2.push(i);
    }
  }
  return Stack2.pop();
}

module.exports = {Stack: Stack, Queue: Queue};
