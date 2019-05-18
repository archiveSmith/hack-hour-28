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
 *
 *
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

var Node = function (value) {
  this.value = value;
  this.next = null;
}

// a circular reference will result in an infanite loop
// if code is still running after checktime, see if the current node appears again
// checkTime should be much longer than expected to run through entire list
function hasCycle(head, checkTime = 1000) {

  const startTime = Date.now();
  let checkNode;
  while (head) {
    if (Date.now() - startTime > checkTime) {
      if (checkNode) {
        if (head == checkNode) return true;
      } else {
        checkNode = head;
      }
    }
    head = head.next;
  }
  return false;
}

var node1 = new Node('1');
var node2 = node1.next = new Node('2');
var node3 = node2.next = new Node('3');
var node4 = node3.next = new Node('4');
var node5 = node4.next = new Node('5');

console.time("mein");
out = hasCycle(node1);
console.timeEnd("mein");

// => false
node5.next = node2;
console.time("meinloop");
out = hasCycle(node1);
console.timeEnd("meinloop");

// => true
console.time("best");
out = hasCycleBest(node1);
console.timeEnd("best");

// => false
node5.next = node2;
console.time("bestloop");
out = hasCycleBest(node1);
console.timeEnd("bestloop");

//best solution from results:

// "Tortoise & Hare"
function hasCycleBest(linkedList) {
  if (linkedList && linkedList.next) {
    return findCycle(linkedList, linkedList.next);
  }
  return false;
}

function findCycle(tortoise, hare) {
  if (tortoise === hare) {
    return true;
  }
  return hare !== null && hare.next !== null && findCycle(tortoise.next, hare.next.next);
}


module.exports = { Node: Node, hasCycle: hasCycle }
