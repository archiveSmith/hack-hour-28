/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {

  // find length
  let current = head;
  let length = 0;
  while(current) {
    length++;
    current = current.next;
  }

  if (k > length) return undefined;

  let counter = 0;

  //now we know the position of the kth to last, so loop again and return it
  //reset current and loop again
  current = head;
  while(current) {
    if(counter++ == length - k) return current.value;
    current = current.next;
  }


}
/*
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(3, a));
*/
module.exports = {Node: Node, kthToLastNode: kthToLastNode};
