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

const first = new Node(5);
first.next = new Node(1);
first.next.next = new Node(3);

function reverseLinkedList(head) {
    let node = head
    let previous;
    let temp;

    while (node) {
        temp = node.next;
        node.next = previous;

        previous = node;
        node = temp;
        console.log(previous);
    }

    return previous;
}


module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
