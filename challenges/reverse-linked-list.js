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

    let current = head;         // declare current node as current head of linked list
    this.head = this.tail;      // point to the current tail as the new head
    this.tail = head;           // point to the current head as the new tail

    let temp;                   // add a temp var to hold the node after the [new] head
    this.head.next = this.tail; // initial move of former head to end of list (after new head)
    current = current.next;     // reassign current to second node (directly after former head)

    while (current != this.head) {      // loop thru until our current node is our [new] head node
        temp = this.head.next;          // hold the current node after our [new] head
        this.head.next = current;       // move our current 'head' node to directly after our [new] head
        this.head.next.next = temp;     // add our tail/node directly after [new] head as next to new second node
        current = current.next;         // move current node point to current 'head' node
    }
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
