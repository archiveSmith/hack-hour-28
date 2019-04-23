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

function reverseLinkedList(newTail) {
    let prev = null,
        curr = newTail,
        next = null,
        head = prev;
    do {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        head = prev;
    } while (curr.next !== null);
    return head;
}

let newNode = new Node(1);
newNode
newNode.next = new Node(2);
newNode.next.next = new Node(3);
newNode.next.next.next = new Node(4);
newNode

reverseLinkedList(newNode)//?

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
