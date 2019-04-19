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
  let l1Counter = 0;
  let l2Counter = 0;
  let head = new Node(null);


  if (!l1.value) {
    return l2;
  } else if (!l2.value) {
    return l1;
  }
    head.value = l1.value;
    while (l1.next !== null && l2.next !== null) {
      
      head.next 
    }
  //   l2Counter++;

  // if (l2Counter % 2 === 0) {

  // }
  // if (l1Counter % 2 === 0) {
  //   head.next = l2;
  //   l1 = l1.next;
  //   l1Counter++;
  // } else if (l2Counter %2 === 0) {
  //   head.next = l1;
  //   l2 = l2.next;
  //   l2Counter++;
  // }

  // while (l1.next !== null) {
  //   newLinked.val === l1.value;};
  // } 

module.exports = {Node: Node, zip: zip};
