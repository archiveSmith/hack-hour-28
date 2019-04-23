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
//find tail and iterate through
    let tail = head;

//push nodes into array
    let listArr = [];
    while (tail) {
        listArr.push(tail)
        tail = tail.next;
    }

//reverse node placement in the array
    listArr.reverse();
    
//change pointers
    let current = tail;
    for (let i = 1; i < listArr.length; i++) {
        if (current) {
            current.next = listArr[i]
        } else {
            current.next = null
        }
    }
return tail

}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
