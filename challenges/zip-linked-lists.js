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
  let newList = [];
  
  let listOneOrNot = true;
  function addNode(node1, node2){
      newList.push(node1);
      newList.push(node2);
      addNode(node1.next, node2.next)
  }

};

module.exports = {Node: Node, zip: zip};
