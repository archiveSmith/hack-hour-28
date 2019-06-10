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
  const data = {};
  let curr = head;
  let prev;

  while (curr) {
    if (data[curr.value]) {
      prev.next = curr.next;
    } else {
      data[curr.value] = true;
      prev = curr;
    }
    curr = curr.next;
  }
}

//No temporary buffer
// Time Complexity: O(N^2)
// Space Complexity: O(1)

function deleteDups(head) {
  let current = head;
  let previous;

  while (current && current.next) {
    previous = current;

    while (previous.next) {
      if (current.value === previous.next.value) {
        previous.next = previous.next.next;
      } else {
        previous = previous.next;
      }
    }
    current = current.next;
  }
}

module.exports = deleteDups;
