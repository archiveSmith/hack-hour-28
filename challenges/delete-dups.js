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

function LinkedList () {
  this.head = null;
}

function deleteDups(head) {
    let newll = new LinkedList();
     if (!this.head || !this.head.next) {
      console.log('No dups');
      return false;
    }




    let p1;
    let p2;
    let nodes = {};

    p1 = this.head;
    p2 = p1.next;
    nodes[p1.data] = true;

    while (p2) {
        let data = p2.data;
        if (nodes[data]) {
            p1.next = p2.next;
        } else {
            nodes[data] = true;
            p1 = p2;
        }
        p2 = p2.next;
    }
};



module.exports = deleteDups;
