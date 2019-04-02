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

function kthToLastNode(k, head) {
  // thought we had to create more nodes at beginning
  // var chr = String.fromCharCode(97 + i); 
  // let lastInt = k+1;
  // iterate through loop and create new nodes on each iteration
  // set nodes value equal to val
  // for (let i=0; i<lastInt; i++) {
    // const letter = String.fromCharCode(97+i);
    // let upper = letter.toUpperCase();
    // letter = new Node(upper);
  // }
  // create a new array value in order to store all values of head
  const value = [head.value]

  // create new variable to keep track of current node
  let nextNode = head.next;
  // iterate through linked list by setting currentN to currentNode.next
  while (nextNode !==null) {
    value.push(nextNode.value)
    nextNode = nextNode.next;
  }

  if (k===0) return value[value.length-1]
  return value[value.length-k];
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
