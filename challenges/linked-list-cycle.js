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
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 *************  What is constant space?
 *  In coumputer science, and in-place algorithm is an algorithm which transforms input using no auxiliary data structure.
 *        (auxiliary data structure: a helper data structure. using to solve a given problem and it is terminated after the problem is solved.)
 *  However, a small amount of extra storage space is allowed for auxiliary variables.
 *  The input is usually overwritten by the output as the algorithm executes.
 * Output: boolean
 */

var Node = function(value) {
  this.value = value;
  this.next = null;
};

// function hasCycle(head) {
//   let valueChecker = {};
//   while (head.next) {
//     if (valueChecker[head.value]) return true;
//     else valueChecker[head.value] = true;
//     head = head.next;
//   }
//   return false;
// }

function hasCycle(head) {
  // Time Complexity: O(n), Space Complexity: O(1)
  // Create a slow node pointer and a fast node pointer
  let tortoise = head;
  let hare = head;
  // While the two pointers exist and the fast pointer has a next value
  while (hare && hare.next) {
    // Move the slow pointer by one node and the fast pointer by two nodes
    tortoise = tortoise.next;
    hare = hare.next.next;
    // If at any time the slow pointer and the fast pointer are equal
    // return true
    if (tortoise === hare) return true;
  }
  // return false if a cycle is never found
  return false;
}

var node1 = new Node("1");
var node2 = (node1.next = new Node("2"));
var node3 = (node2.next = new Node("3"));
var node4 = (node3.next = new Node("4"));
var node5 = (node4.next = new Node("5"));
console.log(hasCycle(node1)); // => false
node5.next = node2;
console.log(hasCycle(node1)); // => true

module.exports = { Node: Node, hasCycle: hasCycle };
