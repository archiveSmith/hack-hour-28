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

//create array that pushes each element of this.head
//return the array.length - k
function kthToLastNode(k, head) {
  if (k < 1) return "node at the index is not defined";
  //will store all the nodes values in the linked list
  const values = [];
  //assign variable to keep track of the current node
  let currentNode = head;

  //pushing all values into the array
  while (currentNode) {
    values.push(currentNode.value);
    currentNode = currentNode.next;
  }

  //destructure the length from the values array (able to do this because all lengths are built into arrays)
  const { length } = values;

  if (k > length) return "k is greater than the number of existing nodes";

  return values[length - k];
}

//alternative better solution using 'pointers'
function kthToLastNode(k, head) {
  let lead = head;
  let follow = head;

  //assign the lead value k number of nodes ahead of follow
  for (let i = 0; i < k && lead; i++) {
    lead = lead.next;
  }

  //this iteration will exit once lead reaches its end and follow will be at the index of k away from the end
  while (lead && follow) {
    lead = lead.next;
    follow = follow.next;
  }

  return follow.value;
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");

console.log(kthToLastNode(2, "a"));

module.exports = { Node: Node, kthToLastNode: kthToLastNode };
