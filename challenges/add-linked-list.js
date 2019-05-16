/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {}

let newlSet1 = new Node(2);
let newl2 = new Node(1);
let newl3 = new Node(5);
newlSet1.next = newl2;
newl2.next = newl3;

let newlSet2 = new Node(5);
let newl5 = new Node(9);
let newl6 = new Node(2);
newlSet2.next = newl5;
newl5.next = newl6;

console.log(newlSet1);
console.log(newlSet2);

console.log(Object.values(newlSet1));

module.exports = { Node: Node, addLinkedList: addLinkedList };
