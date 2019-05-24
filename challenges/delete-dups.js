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
  /* // declare cache to store LL values
  let valCache;
  // cache to store previous linked list item
  let nextNextNode;
  let current = head;
  let next = head.next;
  // store current value to valCache to keep list of LL values
  valCache[current.value] = true;
  // nextNextNode = current.next.next;
  while (current.next != null) {
    if (valCache[current.next.value]) {
      // current = current.next.next;
      current.next = current.next.next;
    } else {
      current = current.next; // sets current to next node
    }
  } */
  let next = head.next;
  let valCache = {};
  valCache[head.value] = true;
  
}

function Node(val) {
  this.value = val;
}

function makeList(array) {
  let head = new Node(array[0]);
  let curr = head;
  array.forEach((val, index) => {
    if (index === 0) return; //skip first element
    const newNode = new Node(val);
    curr.next = newNode;
    curr = newNode;
  });
  // console.log(head.value);
  return head;
}

const myList = makeList([1,2,3,2]);
console.log(myList);

module.exports = deleteDups;
