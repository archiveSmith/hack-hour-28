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
  let curr = head;

  while(curr && curr.next){
    if(curr.val = curr.next.val){
      curr.next = curr.next.next
    } else{
      curr = curr.next
    }
  }
  return head;
  
};

module.exports = deleteDups;
