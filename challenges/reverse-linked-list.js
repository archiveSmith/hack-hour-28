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
    // Easy Base Case
    if (head.next === null) {
        return head;
    }


    let cur1 = head;
    let cur2 = head.next;
    cur1.next = null; // head is now tail

    while (cur2) {
        let nextCur2 = cur2.next;
        cur2.next = cur1;
        cur1 = cur2;
        cur2 = nextCur2;
    }

    return cur1;
}

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
