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
    let current = previous = head;
    let values = {};
    while (current.next){
        if (values[current.value]){
            previous.next = current.next;
        }
        values[current.value] = true;
        previous = current;
        current = current.next;
    }
    if (values[current.value]) {
        previous.next = null;
    }
    return head;
}

let Node = function (value) {
    this.value = value;
    this.next = null;
}

const nodeA = new Node(1);
const nodeB = new Node(2);
const nodeC = new Node(3);
const nodeD = new Node(4);
const nodeE = new Node(5);

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;

console.log(deleteDups(nodeA));

module.exports = deleteDups;
