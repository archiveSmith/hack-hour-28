/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */


function deleteDups(head) {
  let nodes = {};

  let pointer1 = this.head;
  let pointer2 = pointer1.next;
  nodes[pointer1.val] = true;

  while(pointer2){
    let val = pointer2.val;
    if(nodes[val]){
      pointer1.next = pointer2.next;
    } else {
      nodes[val] = true
      pointer1 = pointer2
    }
    pointer2 = pointer2.next
  }
};

module.exports = deleteDups;
