/**
 * We are familar with linked lists being linear and terminating:
 *
 * A->B->C->D
 *
 * However, linked lists can also have cyclical references:
 *
 * A->B->C->D
 *    ^     |
 *    |     V
 *    G<-F<-E
 *
 * Create a function that accepts a linked list and returns true if the linked list has a cyclical reference

 */

 /*
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

var Node = function(value) {
  this.value = value;
  this.next = null;
}

var node1 = new Node('1');
var node2 = node1.next = new Node('2');
var node3 = node2.next = new Node('3');
var node4 = node3.next = new Node('4');
var node5 = node4.next = new Node('5');
console.log(hasCycle(node1)); // => false
node5.next = node2;
console.log(hasCycle(node1)); // => true

function hasCycle(head) {
  let tortoise = head;
  let wabbit = head;
  if(wabbit) wabbit = wabbit.next;
  let temp;

  while(tortoise) {

    if(tortoise === wabbit) {
      return true;
    }

    // take wabbit to the end and stop

    if(wabbit) wabbit = wabbit.next;
    if(wabbit) wabbit = wabbit.next;

    tortoise = tortoise.next;
  }

  return false;
}

module.exports = {Node: Node, hasCycle: hasCycle}
