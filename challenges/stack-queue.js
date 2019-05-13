/**
 * Create a stack.Then create a queue using two stacks.
 */

 const Stack1 = [];
 const Stack2 = [];

 function Stack(element) {
   Stack1.push(element);
 }

 function Queue() {
   if (Stack2.length === 0) {
     if (Stack1.length === 0) { return 'Queue is empty...'; }
     while (Stack1.length > 0) {
       let p = Stack1.pop();
       Stack2.push(p);
     }
   }
   return Stack2.pop();
 }

 Stack('a');
 Stack('b');
 Stack('c');
 Queue();

module.exports = {Stack: Stack, Queue: Queue};
