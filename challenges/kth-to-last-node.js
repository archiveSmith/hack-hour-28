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
  // Iterate through linked list until next: null. 
  // Map those values to an object as a key: value pair
    let holderObject = {};
    let key = 0;                                  // Declare a variable to be an incrementing key in holder object
    let nextLookup = head;     
                                                  // Declare a variable to hold object references found in their next values
    while (nextLookup) {                     // While loop to execute until tail of linked list is reached
      holderObject[key] = nextLookup.value;
      key += 1;
      nextLookup = nextLookup.next;
    }
    
  //Look up key === object's length - k
    let objValPosition = Object.keys(holderObject).length - k;
    if (holderObject[objValPosition] === null) {
      return undefined
    } else {
      return holderObject[objValPosition]} ;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
