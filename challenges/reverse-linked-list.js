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
    let reverseList = [],
    newHead;
    while(head){
        reverseArr.unshift(head);
        head = head.next;
    }

    for(let i = 0; i < reverseList.length; i++){
        if(i === 0) newHead = reverseList[i];
        if(reverseList[i+1] !== undefined){reverseList[i].next = reverseList[i+1];} 
        else{reverseList[i].next = null;}
    }

    return newHead
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
