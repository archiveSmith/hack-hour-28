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

function LinkedList(){
  this.head = null;
}


//make 2 pointers;
//the first pointer should point at the head while the second pointer moves down the rest of the linked list comparing its value to the first pointer's value
//if a duplicate is found, delete it
//if no duplicates are found by the time the second pointer is pointing to null, increment the first counter to be the second node in the linked list
//set the second pointer to be the third node in the linked list and loop until you hit null again, deleting any duplicates;
//repeat until both pointers are pointing at the same node;

function deleteDups(head) {
  let p1 = head;
  let p2 = p1.next;
  while(p2){
    if(p1 === p2){
      p2 = p2.next;
      delete p2;
    }
    p1 = p1.next;
    p2 = p1.next.next;
  }
}


module.exports = deleteDups;
