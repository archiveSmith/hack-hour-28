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

// Create a cache the holds the values of the linked list
// Parse through the nodes
// Check if current node is in cache
// If not, save value to cache and invoke next node
// If so, assign the previous node's next value to skip the current node and assign it to next node


function deleteDups(head) {
  let currentNode = head;
  let previousNode = null;
  let nextNode = null;

  let cache = {};

  while (currentNode !== null) {
    nextNode = currentNode.next;

    if (currentNode.value in cache) {
      previousNode.next = nextNode;
    } else {
      cache[currentNode.value] = '';
    }

    previousNode = currentNode;
    currentNode = currentNode.next;
  }
}

module.exports = deleteDups;
