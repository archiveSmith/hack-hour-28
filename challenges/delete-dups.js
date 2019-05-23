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
  let current = head;
  let nextPointer = current.next;
  if(head === null) {return undefined};
  while(nextPointer != null){
    if(current != nextPointer){
      current = nextPointer;
      nextPointer = nextPointer.next;
    }
    if(current === nextPointer){
      current = nextPointer
      nextPointer = nextPointer.next;
      delete current;
    } 
  }
  return head;
}


module.exports = deleteDups;
