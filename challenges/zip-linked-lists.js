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
  // set odd counter
  let isOdd = true;

  let l1Next = l1.next;
  let l2Next = l2.next;
  while (l1Next) {
    while (l2Next) {
      if (l1.value != null) {
        const newL1Node = new Node(l1.value);
      }
      if (l2.value != null) {
        const newL2Node = new Node(l2.value);
      }
      if (isOdd) {
        newL1Node.next = newL2Node;
      } else {
        newL2Node.next = newL1Node;
      }

      // reverse value of isOdd
      isOdd = !isOdd;
    }
  }
};

module.exports = {
  Node: Node,
  zip: zip
};