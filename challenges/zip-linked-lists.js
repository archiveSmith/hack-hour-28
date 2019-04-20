/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

// function LinkedList() {
//   this.head = null;
//   this.tail = null;
// }

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  //declare a count called l1NodesUsed for l1 and l2NodesUsed for l2
  let l1NodesUsed = 0;
  let l2NodesUsed = 0;
  //if l1's length is 0, return l2
  if (l1.length === 0) return l2;
  //l2's length is 0, return l1
  if (l2.length === 0) return l1;
  // set starting values
  let l2curr = l2.head;
  let l1curr = l1.head;
  // determine which list will run out first
  let shorter;
  let shorterUsed;
  if (l1.length < l2.length) {
    shorter = l1.length;
    shorterUsed = l1NodesUsed
  } else {
    shorter = l2.length;
    shorterUsed = l2NodesUsed;
  }
  //otherwise, set l1s head as the head of the zip list.
  let l1.head.next = l2curr;
  l1.head.next = l2.head;
  while (shorterUsed <= shorter) {
    curr = l2curr;
    curr.next = l1curr.next;
    l1NodesUsed += 1;
    l1curr = l1curr.next;
    l2NodesUsed += 1;
    l2curr = l2curr.next;
  }
  //compare count to l2's length. If l2's length is exhausted, slice the remaining nodes off of it and add to zip list.

  //iterate l1NodesUsed count
  //set l2's head to the next node in the zip list
  //compare count to l1's length. If l1's length is exhausted, slice the remaining nodes off of it and add to zip list. 
  //repeat.
  //return when both are exahusted. 

};

console.log(zip(,));

module.exports = {Node: Node, zip: zip};
