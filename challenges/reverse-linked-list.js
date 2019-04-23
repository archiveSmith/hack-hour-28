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
    // first thought
    // iterate through the linked list
    // push values of each node into an array
    // reverse the array and then create a new linked list while iterating through the array of pushed values
    // create temp variables for the new value/next

    // 2nd thought
    // create temp variable to store value of next of current node
    // change next value to previous (which is set to null in beginning) which is in effect reversing the linked list
    // set previous to current node for the next iteration
    // reset node to tempNext which lets you traverse through the linked list normally

    let node = head;
    let tempNext;
    let previous = null;

    while (node) {
        tempNext = node.next;
        node.next = previous;
        previous = node;
        node = tempNext;
    }
    return tempNext;
}



module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
