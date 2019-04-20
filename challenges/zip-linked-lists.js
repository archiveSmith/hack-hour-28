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
  const l3 = new Node(null);
  while(l1 !== null && l2 !== null) {
    if(l1.next !== null) {
      l3.push(l1.value);
    } 
    if()
  }
};

module.exports = {Node: Node, zip: zip};
