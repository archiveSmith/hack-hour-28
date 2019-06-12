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
  // Two linked lists, must redefine their .next values by alternating between lists
  let valHolder1 = '';
  for (node in l1) {
    valHolder1 = node.next;
    node.next = l
  }
  // Hm, this probably has to be recursive. Repeat process and switch l1 and l2?
  zip(l2, l1)
};


module.exports = {Node: Node, zip: zip};
