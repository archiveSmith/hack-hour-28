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
  let newLinklist= {val: -1, next: null}
  let runner = newLinklist;

  while(l1 && l2){
    if(l1.val === null){
      l2.val = runner.val;
      l1.val = runner.next;
      l2 = l2.next
    } else if(l2.val === null){
      l1.val = runner.val;
      l2.val = runner.next;
      l1 = l1.next;
    }
    runner = runner.next;
  }
  return newLinklist.next;

};

module.exports = {Node: Node, zip: zip};
