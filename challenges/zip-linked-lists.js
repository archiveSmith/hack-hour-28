/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let curr = l1;
  let temp1 = l1.next;
  let next = l2;
  let temp2 = l2.next;
  do{
    curr.next = next;
    next.next = temp1;
    temp1.next = temp2;
    curr = temp1;
    next = temp2;
    temp1 = temp1.next;
    temp2 = temp2.mext;

  }while(curr.next);

};

module.exports = {Node: Node, zip: zip};
