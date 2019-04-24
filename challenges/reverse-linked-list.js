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
    let stack = [];
    let currNode = head;
    let nextNode = null; 
    let newHead = null;

    while (currNode.next) {
        stack.push(currNode);
        currNode = currNode.next;
    }

    newHead = currNode;

    while (stack.length) {
        nextNode = stack.pop();
        currNode.next = nextNode;
        currNode = nextNode;
    }
    currNode.next = null;

    return newHead;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
