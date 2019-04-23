/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    let node = head;
    let reversal;
    let temp;
    while(node) {
        temp = node.next;
        node.next = reversal;
        reversal = node;
        node = temp;
    }
    return reversal;
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

  let list = makeList([1,2,3]);
  console.log(list)
  console.log(reverseLinkedList(list));
  


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
