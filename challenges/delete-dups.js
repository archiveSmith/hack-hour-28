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

  while(current !== null && current.next !== null)
  {
    if(current.val === current.next.val)
    {
      current.next = current.next.next;
    }
    else {
      current = current.next;
    }
  }
  return head;
}

module.exports = deleteDups;
