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
  nodeLength++
}


let nodeLength = 0


const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;


function kthToLastNode(k, head) {
  let arrayOfNodes = [];
  let kth = nodeLength - k + 1
  while (typeof head === "object") {
    arrayOfNodes.push(head)
    if (head.next !== null) {
    head = head.next
    } 
  }
  return arrayOfNodes[kth].value
}
console.log(kthToLastNode(2, a))
console.log(4)

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
