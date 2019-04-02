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
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */


function Node(val) {
  this.value = val;
  this.next = null;
}
function LinkedList() {
  this.head = null;
  this.tail = null;
}


function kthToLastNode(k, head) {
  if (k === 0) return false;
  let val = [head.value];
  let nexty = head.next;
  while (nexty) {
    nexty = nexty.next;
  }
  return val[val.length - k];
}



const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');


a.next = b;
b.next = c;
c.next = d;
d.next = e;


module.exports = {Node: Node, kthToLastNode: kthToLastNode};
